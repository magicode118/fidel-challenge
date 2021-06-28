# Cypress Fidel Challenge
## Front-End & Back-End Integration Tests

## Setup
1. Install Cypress in repository folder:
```sh
npm install cypress
```
2. Verify correct installation (should open Cypress GUI):
```sh
node_modules/.bin/cypress open
```
3. Add repository folder to Cyress GUI for editing:
```sh
<repository path>/fidel-challenge/
```

## Project Structure

### Test Files
All test files are located in the cypress/integration folder;

### Fixture Files
All fixture files are located in the cypress/fixtures folder;

### Helper Files
All helper files are located in the support folder;

### Test Type
Front-end tests are suffixed with 'front-end' in their file name;
Back-end tests are suffixed with 'back-end' in the file name;

## Run Tests from VS Code:

### With VS Code Tasks
From VS Code:
```sh
Ctrl+Shift+B > Select (Cypress Run Tests)
```
### With NPM Tasks
From VS Code Terminal:
```sh
 npm run cy:run
```
## Open Cypress GUI from VS Code:

### With VS Code Tasks
From VS Code:
```sh
Ctrl+Shift+B > Select (Cypress Open)
```
### With NPM Tasks
From VS Code Terminal:
```sh
 npm run cy:open
```