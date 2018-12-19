# ext-angular-gen
A code generator for ExtAngular applications.

## Installation

Install [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g @sencha/ext-angular-gen
```

## Creating a new ext-angular-gen App

If you haven't already, log into Sencha's private registry using the credentials you received in your ExtAngular trial or subscription activation email. If you don't have credentials, you can get them by [signing up for a trial of ExtAngular](https://www.sencha.com/products/extangular/evaluate/).

```bash
npm login --registry=http://npm.sencha.com --scope=@sencha
```

Then, to create a new ext-angular-gen app, run:

```bash
ext-angular-gen MyCoolExtAngularApp
```

## Development

To make changes to the generator, run:

```bash
git clone git@github.com:sencha/ext-angular.git
cd ext-angular
npm install
cd packages/ext-angular-gen
npm link
```

Now `ext-angular-gen` will use your local copy of the generator.

## License

MIT © [Sencha, Inc.](https://www.sencha.com/)
