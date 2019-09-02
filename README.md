# Project Milkyway

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Runs the eslint rules

### `npm run prettier`

Formats the files using [Prettier](https://prettier.io/docs/en/install.html)

## Visual Studio code Settings

### for format file on save

`cmd or ctrl + shift + p`

search for `preferences: open settings(json)` and paste below settings

```pre
"files.autoSave": "off",
// Format a file on save. A formatter must be available, the file must not be auto-saved, and editor must not be shutting down.
"editor.formatOnSave": true,
// Enable/disable default JavaScript formatter (For Prettier)
"javascript.format.enable": false,
// Use 'prettier-eslint' instead of 'prettier'. Other settings will only be fallbacks in case they could not be inferred from eslint rules.
"prettier-eslint.eslintIntegration": true,
"editor.tabSize": 2,
"editor.detectIndentation": false,
"[json]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### Contributing

Look into CONTRIBUTING.md file for contributing details
