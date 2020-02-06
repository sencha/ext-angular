## Understanding an app for @sencha/ext-angular-classic


This guide will illustrate some of the key features of ExtAngular within a Angular application.
To get a starter application created,
follow the [Getting Started guide](https://github.com/sencha/ext-angular/blob/ext-angular-7.1.1/packages/ext-angular-classic/GETTING_STARTED.md).

## adding ExtAngular to an existing Angular application

To add ExtAngular to an existing application created with Angular CLI, run the following
in the root folder of the Angular app:

```
npm install @sencha/ext-angular-classic
```

This will create a 'public/ext-runtime-classic' folder, and also add several entries in the 'angular.json'
file.

```
    "styles": [
      "src/styles.css",
      "ext-runtime-classic/triton/triton-all.css"
    ],
    "scripts": [
      "ext-runtime-classic/classic.engine.js"
    ]
```


## Changing the theme for an ExtAngular app

in the 'public/ext-runtime-classic' folder, you will notice several theme folders.  To change
and use one of these themes, find the following section in angular.json:

```
    "styles": [
      "src/styles.css",
      "ext-runtime-classic/triton/triton-all.css"
    ],
```

notice that this line points to the triton folder and triton-all.css file.  For example, to change to material, update to the following:

```
    "styles": [
      "src/styles.css",
      "ext-runtime-classic/material/material-all.css"
    ],
```


here are all the classic themes available:

```
"ext-runtime-classic/graphite/graphite-all.css"
"ext-runtime-classic/material/material-all.css"
"ext-runtime-classic/triton/triton-all.css"
```




## understanding the ExtAngular 'ready' event

When using ExtAngular components, you want to make sure that the components are completely available
before calling any component methods or updating properties in code.
For this reason, every componenthas a 'ready' event.

This event, when listened to, will indicate to your app that ALL ExtAngular components on the page are
ready and available.  With this event, 2 paremeters are send, the first is the ExtAngular component of
the calling ready event,
the second is an array of components on your page that have the 'extname' property applied to it.

```
@Component({
    selector: 'app-root',
    template: `
      <ExtPanel
        extname="thePanel"
        (ready)="readyPage($event)"
      >
        <ExtButton text="Click Me" extname="theButton1"></ExtButton>
        <ExtButton text="Click Me" extname="theButton2"></ExtButton>
    `,
    styles: []
})
export class AppComponent {
  readyPage({cmp, cmpObj}) {
    //ExtPanel component available as cmp parm
    //ExtButton available as cmpObj['theButton1']
    //can now call the following:
    //cmpObj['theButton1'].setText('new button1 text')
    //ExtButton available as cmpObj['theButton2']
  }
}

```
