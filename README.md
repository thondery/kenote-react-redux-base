# kenote-react-redux-base

React &amp; Redux Base for Kenote

[![Build Status][travis-image]][travis-url]
[![Codecov Status][codecov-image]][codecov-url]
[![Gratipay][licensed-image]][licensed-url]

[travis-image]: https://travis-ci.org/thondery/kenote-react-redux-base.svg?branch=master
[travis-url]: https://travis-ci.org/thondery/kenote-react-redux-base
[codecov-image]: https://img.shields.io/codecov/c/github/thondery/kenote-react-redux-base/master.svg
[codecov-url]:   https://codecov.io/github/thondery/kenote-react-redux-base?branch=master
[licensed-image]: https://img.shields.io/badge/license-MIT-blue.svg
[licensed-url]: https://github.com/thondery/kenote-react-redux-base/blob/master/LICENSE

## Requirements

- node ^6.0.0
- npm ^3.0.0

## Installation

```bash
$ git clone https://github.com/thondery/kenote-react-redux-base.git <my-project-name>
$ cd <my-project-name>

$ yarn  # Install project dependencies (or `npm install`)
```

## Running the Project

```bash
$ yarn start  # Start the development server (or `npm start`)
```

| yarn \<script\> | Description |
|-----|-----|
| start | Serves your app at localhost:3000 |
| build | Builds the application to ./dist |
| test | Runs unit tests with Jest. |

## Project Structure

```bash
├── dist
├── dll
│   └── manifest.json
├── src                                 # Application source code
│   ├── containers
│   │   └── root.js
│   ├── index.js                        # Application bootstrap and rendering
│   └── index.html                      # Main HTML page container for app
├── .babelrc
├── project.config.js
├── webpack.config.js
├── webpack.dev.config.js
├── webpack.dll.config.js
└── webpack.prod.config.js
```

## License

this repo is released under the [MIT License](https://github.com/thondery/kenote-react-redux-base/blob/master/LICENSE).