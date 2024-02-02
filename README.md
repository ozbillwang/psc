># Notes: The tool sends passwords to OpenAI in plain text. Using this tool carries the risk of exposing your password. Please be aware of the potential risks.

# Password-Strength-Checker (psc)

Check the password strength via OpenAI

## Usage

### Prepare your OpenAI API Key

Way 1 is, set environment variable
```
export OPENAI_API_KEY="<replace with your openai api key>"
```

Way 2 is, put the key to local .env
```
mv .env.sample .env
```

update the API key with yours

### Run psc tool directly

Download the binary from [release](https://github.com/AbacusGPT/Password-Strength-Checker/releases)

Choice the suitable OS for your environment

uncompress and run it
```
# for example, from my macbook
$ wget https://github.com/AbacusGPT/Password-Strength-Checker/releases/download/v1.0.10/psc-1.0.10-darwin-amd64.tar.gz 

$ tar zxvf psc-1.0.10-darwin-amd64.tar.gz

$ mv psc-1.0.10-darwin-amd64 psc

$ ./psc --password 'Pass!234'
weak

$ ./psc --password 62sWJFk28gVnXK3u
strong
```

### build by yourself

* Clone this repo

```
git clone https://github.com/AbacusGPT/Password-Strength-Checker
```

* Prepare your OpenAI API Key

Way 1 is, set environment variable
```
export OPENAI_API_KEY="<replace with your openai api key>"
```

Way 2 is, put the key to local .env
```
mv .env.sample .env
```

update the API key with yours

* run the build

```
go build -o psc .
```

You should see a binary file `psc` generated locally

* run the test now
```
./psc --password password
weak

$ ./psc --password 62sWJFk28gVnXK3u
strong
```
