# Password-Strength-Checker
Check the password strength via OpenAI

### Usage

* Clone this repo

```
git clone https://github.com/AbacusGPT/Password-Strength-Checker
```

* Prepare your OpenAI API and put to local .env
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
