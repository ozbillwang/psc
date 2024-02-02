package main

import (
	"bytes"
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

// checkPasswordStrength sends a request to OpenAI API to check the strength of a password
func checkPasswordStrength(apiKey, password string) (string, error) {
	apiEndpoint := "https://api.openai.com/v1/chat/completions"

	// Prepare the OpenAI API request payload
	input := fmt.Sprintf("Check if the password '%s' is strong, or weak. Please only answer 'strong', 'weak'", password)
	payload := map[string]interface{}{
		"messages": []map[string]interface{}{
			{"role": "system", "content": "You are a helpful assistant."},
			{"role": "user", "content": input},
		},
		"model":      "gpt-3.5-turbo",
		"max_tokens": 50,
	}

	// Debug prints
	payloadBytes, err := json.Marshal(payload)
	if err != nil {
		return "", err
	}
	// fmt.Println("Request Payload:")
	// fmt.Println(string(payloadBytes))

	// Make the OpenAI API request
	req, err := http.NewRequest("POST", apiEndpoint, bytes.NewBuffer(payloadBytes))
	if err != nil {
		return "", err
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+apiKey)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	// Check for HTTP status code indicating success
	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("unexpected HTTP status code: %d", resp.StatusCode)
	}

	// Parse the OpenAI API response
	var response map[string]interface{}
	err = json.NewDecoder(resp.Body).Decode(&response)
	if err != nil {
		return "", err
	}

	// Debug prints
	// fmt.Println("Response Body:")
	// fmt.Println(response)

	// Extract the assistant's content from the API response
	assistantContent, ok := response["choices"].([]interface{})[0].(map[string]interface{})["message"].(map[string]interface{})["content"].(string)
	if !ok {
		return "", fmt.Errorf("unable to extract assistant's content from API response")
	}

	return assistantContent, nil
}


func main() {

	apiKey := os.Getenv("OPENAI_API_KEY")

	// If OPENAI_API_KEY is not set or is empty, check the .env file
	if apiKey == "" {
		err := godotenv.Load()
		if err != nil {
			return "", fmt.Errorf("error loading .env file")
		}
		apiKey = os.Getenv("OPENAI_API_KEY")
	}
	if apiKey == "" {
		fmt.Println("Please provide the OpenAI API key in the .env file.")
		os.Exit(1)
	}

	var password string
	flag.StringVar(&password, "password", "", "Password to check")
	flag.Parse()

	if password == "" {
		fmt.Println("Please provide the password using the -password flag.")
		os.Exit(1)
	}

	// Check the password strength using OpenAI API
	strength, err := checkPasswordStrength(apiKey, password)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	fmt.Println(strength)
}

