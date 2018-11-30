ExtReact Examples

ExtReact provides number of examples at [@sencha/ext-react](https://github.com/sencha/ext-react) library.  This guide documents the steps needed to use various ExtReact examples.

## Examples

Following examples are available and you can clone the [ext-react](https://github.com/sencha/ext-react)
monorepo:

* [ExtReact Modern Boilerplate](https://github.com/sencha/ext-react/tree/master/packages/ext-react-modern-boilerplate)
* [ExtReact Classic Boilerplate](https://github.com/sencha/ext-react/tree/master/packages/ext-react-classic-boilerplate)
* [ExtReact Conference App](https://github.com/sencha/ext-react/tree/master/packages/ext-react-conference-app)
* [ExtReact Rest Example](https://github.com/sencha/ext-react/tree/master/packages/ext-react-rest-example)

## Creating a New React Application from exiting examples

You can clone the [ext-react](https://github.com/sencha/ext-react)
monorepo and copying one of the boilerplates to create a new application:

For example, to use the modern boilerplate:

```
git clone https://github.com/sencha/ext-react.git
cp -r ext-react/packages/ext-react-modern-boilerplate /path/to/new/app
```
remove node modules directory in you app and 

```
npm install
npm start
```


To use the classic boilerplate, 

```
git clone https://github.com/sencha/ext-react.git
cp -r ext-react/packages/ext-react-classic-boilerplate /path/to/new/app
```

Then, follow the instructions in the boilerplate's README.md to setup and run your new application.
