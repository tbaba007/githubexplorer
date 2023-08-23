# Github repository search
## To get started 
You'll need to create a GitHub account and generate a personal access token by following these steps:

Go to your GitHub Settings -> Developer settings -> Personal access tokens.
Generate a new token with at least the public_repo scope.

## Project Description
Description Create React application which integrates with github.com API and allows user to search for up to 5 users with a username similar to the value entered in text input and then on click, display repositories (no limit on displayed repositories amount) for selected GitHub user API docs URL: https://developer.github.com/v3/ 

## Project Design
![Screenshot 2023-08-22 at 19 09 46](https://github.com/tbaba007/githubexplorer/assets/8265236/749a41c9-b5da-48d6-9758-d90ceebd3750)

## How to run 
1. Download the project and run npm install or yarn install to install dependencies
2. create a .env file and add the following to the file
REACT_APP_API_TOKEN='add your token here'
REACT_APP_API_BASEURL=https://api.github.com
3. npm start or yarn start


