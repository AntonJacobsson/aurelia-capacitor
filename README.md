# Aurelia Capacitor

[![codebeat badge](https://codebeat.co/badges/287e17ec-344d-414f-baf5-d0a423289007)](https://codebeat.co/projects/github-com-antonjacobsson-aurelia-capacitor-main)

This project is bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Start dev web server

    npm start

## Build the app in production mode

    npm run build

It builds all files to dist folder. To deploy to production server, copy all the `dist/*` files to production root folder.

For example
```
dist/index.html
dist/foo.12345.js
```
Copy to production root folder
```
root_folder/index.html
root_folder/foo.12345.js
```

## Unit Tests

    npm run test

Run unit tests in watch mode.

    npm run test:watch


## Analyze webpack bundle

    npm run analyze


## Created with Capacitor Create

This app was created using the `npx @capacitor/cli create` command, and comes with a very
minimal shell for building an app.

Note: unless you know what you're doing, we don't recommend using the `create` way of building an app. Instead, you'll
likely want to create an app using your framework's tooling (such as `create-react-app`), and then *add* capacitor
to *that* project (using `npx @capacitor/cli init`).

### Running this example

To run the provided example, can use serve command:

```bash
npx cap serve
```
