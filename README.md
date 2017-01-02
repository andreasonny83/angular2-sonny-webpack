# angular2-sonny-webpack

> A webpack starter kit for Angular

## Table of contents

*   [Installation](#installation)
*   [Usage](#usage)
  *   [Development](#development)
  *   [Progressive WebApp](#progressive-webapp)
  *   [Build](#build)
  *   [Test the distribution version](#test-the-distribution-version)
*   [Contributing](#contributing)
*   [Changelog](#changelog)
*   [License](#license)

## Installation

Install the component using `npm`:

```bash
# To get the latest stable version and update package.json file:
$ npm install
```

or `yarn` with:

```bash
$ yarn install
```

## Usage

### Development

```bash
$ npm start
```

To start the application and automatically recompile on file-changes.

### Progressive WebApp

This boilerplate will help you create a progressive web app in line with the [Google directives](https://developers.google.com/web/progressive-web-apps/).
The project contains an app `manifest.json` to add installable support.
Also, a service-worker will automatically been generated after the `build` process to grant offline support to your app.

### Build

To build a distribution version of your Angular2 app, run:

```bash
$ npm run build
```

This will generate a clean new `dist` folder containing your production-ready app.
A service worker will also being created in your distribution folder using the [sw-precache](https://github.com/GoogleChrome/sw-precache) node package.

### Test the distribution version

To serve your generated distribution version of the app, run:

```bash
$ npm run server:prod
```

This will open your distribution version of the app inside your browser. From here you may also being able to test the offline support.

## Contributing

1.  Fork and clone it!
1.  Create your feature branch: `git checkout -b my-new-feature`
1.  Commit your changes: `git commit -am 'Add some feature'`
1.  Push to the branch: `git push origin my-new-feature`
1.  Submit a [Pull Request](https://github.com/andreasonny83/angular2-sonny-webpack/pull/new/master)

## Changelog

Changelog available [here](https://github.com/andreasonny83/angular2-sonny-webpack/blob/master/CHANGELOG.md)

## License

[MIT License](https://github.com/andreasonny83/angular2-sonny-webpack/blob/master/LICENSE) © Andrea SonnY
