# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm run install`
### `npm run build`
### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

1. As a user (of the application) I can see my current location on a Google map
2. As a user I can save a short note at my current location
3. As a user I can see notes that I have saved at the location they were saved
on the map
4. As a user I can see the location, text, and user-name of notes other users
have saved
5. As a user I have the ability to search for a note based on contained text or
user-name
6. Use the menu at the top left to nagigate, for login page just give any dummy value

Docker

The app is served using Nginx server and package through the docker container.
Use these commands to run a production build, if docker is intalled on the system.
Then browse to http://localhost:8080

 ### `npm run image_build`
 ### `npm run run_image`
