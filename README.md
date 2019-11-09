# commerce-backend
Backend architecture for e-commerce-like project

## **Setup & Installation**

- NodeJS 12.13
- NPM 6.12.0

The following instructions are only for installing and managing packages with NPM.

1. Clone or Fork this repo with either HTTPS or SSH.
2. Load installed dependencies with,
```
npm install
```
3. To run this on local machine,
```
npm start
```
4. To install new dependencies, save it to package.json.
```
npm install <package> --save
```
5. This project is running remotely on Heroku. Install Heroku CLI first.

    mac
    ```
    brew tap heroku/brew && brew install heroku
    ```
    Windows with wsl & other linux distros
    ```
    $ curl https://cli-assets.heroku.com/install.sh | sh
    ```
6. Login to your Heroku
```
heroku login
```
7. Check whether heroku remote exists.
```
git remote -v
```
8. If heroku branch is missing, retrieve the git url from heroku dashboard and add it to your remote.
```
git remote add heroku <heroku-git-url> 
```
9. To push your feature to heroku remote after commits.
```
git push heroku master
```
10. To retrieve mongodb connection string
```
heroku config:get MONGODB_URI
```