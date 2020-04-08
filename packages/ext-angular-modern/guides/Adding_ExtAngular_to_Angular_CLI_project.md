## Adding @sencha/ext-angular-modern components to an existing Angular CLI project

## Requirements
Fetch your npm credentials and generate an application.

### Step 1: Retrieve npm Repo Access Credentials
To gain access to the Sencha npm repository:

1. [Start a free trial of ExtReact](https://www.sencha.com/products/extreact/evaluate/).
2. [Purchase ExtReact or Ext JS Enterprise](https://www.sencha.com/store/).

* **Note:** Ext JS enterprise customers already have access to ExtAngular.
* **Note:** Existing customers use your support portal credentials. But switch the username, `@` character with `'..'` two periods, so the username would look something like this after it's converted: `name..gmail.com`.

### Step 2: Login to the npm repository
Once you have your credentials login to the npm repo.

```
npm login --registry=https://npm.sencha.com --scope=@sencha
```

### Step 3: Generate an Angular Application
If you don't already have a Angular application generate an Angular application.

- Install the app generation CLI.

```
npm install -g @angular/cli
```

- Generate an Angular appication.

```
ng new ext-angular-modern-demo --minimal=true --interactive=false -g=true --skipInstall=false
```

## Add ExtAngular Components to the Angular Application

### Step 1: Install Dependency

In the project, install the ExtAngular components dependency in the package.json.

```
npm install @sencha/ext-modern-runtime --save
npm install @sencha/ext-angular-modern --save
```

### Step 2: Configure Application

Optional: Configure CSS

In the file [project]/src/styles.css add some normalizing css.

/* file: [project]/src/styles.css */
```
:root {
  --base-color: #024059;
  --base-foreground-color: white;
  --background-color: white;
  --color: black;
}
```

Configure the Angular App Module

In the file [project]/src/app/app.module.ts add the ExtAngular components import.

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 1. Import the ExtAngular components
import { ExtAngularModernModule } from '@sencha/ext-angular-modern';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // 2. Delclare the ExtAngular import in the app module imports.
    ExtAngularModernModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Configure a Component with ExtAngular Component
In the file [project]/src/app/app.component.ts declare an ExtAngular component in the html template.

```
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <!-- ExtAngular Component simple Example -->
      <ExtButton text="My Button" shadow="true"></ExtButton>
    `,
    styles: []
})
export class AppComponent {
}
```

### Step 3: Try it out

Run the app with npm start

```
npm start
```