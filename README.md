<!-- URL do projeto
[URL] (https://beer-coins-g3-git-main.beer-tech-g3.vercel.app/login)

Documentação de Back-End
[Swagger](https://beercoin-fusion-api.herokuapp.com/swagger-ui.html#)

PDF de REQUISITOS
[PDF] (https://github.com/leoqbc/beertech-react/blob/master/Aula11_challenge/projetochallengebeer.pdf)

Deploy automático pelo Vercel
[URL] (https://vercel.com/beer-tech-g3/beer-coins-g3)
-->
<h1 align="center">
  <br>
  <img src="https://github.com/imarceloi/beercoins-g3/blob/dev/src/images/logo.png" height="200px"/>
  <br>
  <br>
</h1>

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

> <em>It was created for a challenge given by <b>BeerTech Talents</b>. The main objective of this challenge is to create an application where the customer can access a virtual wallet. In this virtual wallet, the customer can check his balance, take a statement, and transfer amounts to another account.</em>

# Table of Contents

- [Project Demo](#project-demo)
  - [Login Page](#login-page)
  - [SignUp Page](#signup-page)
- [Available Scripts](#available-scripts)
  - [yarn](#yarn)
  - [yarn start](#yarn-start)
  - [yarn build](#yarn-build)
- [Folder Structure](#folder-structure)
  - [src](#src)
    - [assets](#assets)
    - [components](#components)
    - [config](#config)
    - [context](#context)
    - [interfaces](#interfaces)
    - [screens](#screens)
    - [services](#services)
    - [utils](#utils)
- [Tech / Frameworks / Libs ](#tech-/-frameworks-/-libs)
- [Installing a Dependency](#installing-a-dependency)
- [Importing a Component](#importing-a-component)
- [Adding a Stylesheet](#adding-a-stylesheet)
- [Adding Images and Fonts](#adding-images-and-fonts)
- [Proxying API Requests in Development](#proxying-api-requests-in-development)

<br>
<br>

# Project Demo

## Login page

Validate if input fields has value

<img src="https://github.com/johnnyg3p/beercoins-g3/blob/dev/readme-assets/login.gif?raw=true" width="500px"/>

## Signup page

- Validate if input fields has value
- Add masks for CNPJ and Phone fields
- Check if CNPJ is valid
- Check if Phone Number is valid
- Check if email is valid

<img src="https://github.com/johnnyg3p/beercoins-g3/blob/dev/readme-assets/sign-up.gif?raw=true" width="500px"/>

<br>
<br>

# Available Scripts

In the project directory, you can run:

### `yarn`

After clone, you should run `yarn` to install all project dependencies.

> Pay attention when you `pull` updates. Sometimes, you'll need to run `yarn` again to install some packages that other developers have installed.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

<br>

# Folder Structure

After clone, your project should look something like this:

```
📦beercoins-g3
 ┣ 📦src
 ┣  📂assets
 ┃ ┗ 📂scss
 ┣ 📂components
 ┃ ┣ 📂RandomComponent
 ┣ 📂config
 ┃ ┗ 📂axios
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂constants
 ┃ ┗ 📜index.ts
 ┣ 📂context
 ┃ ┗ 📂Auth
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂images
 ┃ ┣ 📜logo.png
 ┣ 📂interfaces
 ┃ ┣ 📜IInterfacePatternName.ts
 ┃ ┣ 📜IInterfaceGlobalPatternName.d.ts
 ┣ 📂screens
 ┃ ┣ 📂ScreenName
 ┃ ┃ ┣ 📜ScreenName.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┣ 📂services
 ┃ ┣ 📂ServiceName
 ┃ ┃ ┗ 📂ServiceName.service.ts
 ┣ 📂utils
 ┃ ┣ 📂functionName
 ┃ ┃ ┣ 📜functionName.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂formaters
 ┃ ┃ ┣ 📜formaterFunctionName.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜routes.tsx
 ┣ 📜serviceWorker.ts
 ┗ 📜setupTests.ts
```

<br>

## src

The `src` folder is where all the content of the application is located.
The `index.tsx` script is our entry point. It is where our `ReactDOM.render()` is called and render our entire application into `#root` element. If you want to rename the id of this element, you should rename it on `public/index.html`.

## assets

Assets folder can be used to put some resources files that our project need. In this folder you can add files such `img`, `scss styles`, `fonts` and so on.

## components

As the name itself says, its where we put all our components. The pattern of a `component folder` is to have one filed named `index.tsx` and other with the name of component, like `NameOfComponent.tsx`. The main reason to do this way, is to help us developers to know in what file of a specific component I'm working just looking into the tabs. So, the `index.tsx` file will have a default export from the `NameOfComponent.tsx`, which is where all of component code will be located, like in the example below:

```
export { default } from "./NameOfComponent";
```

Following this pattern, we can add specific styles for our components adding a file `NameOfComponent.scss` into the components folder. To read more about it you can jump into [Adding a Stylesheet](#adding-a-stylesheet) section.

## config

Is where we put all configs from libs that we use.

## context

We use [Context API](https://pt-br.reactjs.org/docs/context.html) (Global state manager) as our global state manager. In this folder is where you can add all providers that you need.

## interfaces

We store all of our `TS` interfaces here. You can find 2 kind of files into this folder following the `I` in the start of files pattern. The first kind of file is `.ts`, which is where we use some `export` that won't work as global, like `enum`. The second example is `.d.ts` files, which we don't need to export de interfaces because the `IDE` and `TS` intellisense will find it by default and suggest it for you.

## screens

Is where we put our `pages` components. If you look into `routes.tsx` files, it is the components that are rendered right after the routes is called.

## services

We add some services that call backend APIs. In the service files, you can create a `class` and add its methods to make calls and return results.

## utils

In this folder we add some functions that we can use more than once.

# Tech / Frameworks / Libs

## Built with

- [React](https://pt-br.reactjs.org/)
- [Create React App](https://github.com/facebookincubator/create-react-app)
- [Typescript](https://www.typescriptlang.org/)
- [Context API](https://pt-br.reactjs.org/docs/context.html) (Global state manager)
- [Material-UI](https://material-ui.com/) (UI Framework)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start) (Application routes)
- [react-toast-notifications](https://jossmac.github.io/react-toast-notifications/) (Toast messages)
- [node-sass](https://github.com/sass/node-sass) (Application styles)
- [axios](https://github.com/axios/axios) (REST API client)
- [@brazilian-utils](https://github.com/brazilian-utils/brazilian-utils) (CNPJ, email, phone fields validators)

<br>

# Installing a Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `yarn`:

```
yarn add <library-name>
```

<br>

# Importing a Component

This project setup supports ES6 modules thanks to Babel.<br>
While you can still use `require()` and `module.exports`, we encourage you to use [`import` and `export`](http://exploringjs.com/es6/ch_modules.html) instead.

For example:

### `Button.js`

```js
import React, { Component } from "react";

class Button extends Component {
  render() {
    // ...
  }
}

export default Button; // Don’t forget to use export default!
```

### `DangerButton.js`

```js
import React, { Component } from "react";
import Button from "./Button"; // Import a component from another file

class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}

export default DangerButton;
```

Be aware of the [difference between default and named exports](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281). It is a common source of mistakes.

We suggest that you stick to using default imports and exports when a module only exports a single thing (for example, a component). That’s what you get when you use `export default Button` and `import Button from './Button'`.

Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like.

Learn more about ES6 modules:

- [When to use the curly braces?](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)
- [Exploring ES6: Modules](http://exploringjs.com/es6/ch_modules.html)
- [Understanding ES6: Modules](https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules)

<br>

# Adding a Stylesheet

This project setup uses [node-sass](https://github.com/sass/node-sass) for handling all assets. Node-sass offers a custom way of “extending” the concept of `import` beyond JavaScript. To express that a JavaScript file depends on a SCSS file, you need to **import the SCSS from the JavaScript file**:

### `Button.scss`

```scss
.Button {
  padding: 20px;
}
```

### `Button.js`

```js
import React, { Component } from "react";
import "./Button.scss"; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />;
  }
}
```

<br>

# Adding Images and Fonts

With Webpack, using static assets like images and fonts works similarly to CSS.

You can **`import` an image right in a JavaScript module**. This tells Webpack to include that image in the bundle. Unlike CSS imports, importing an image or a font gives you a string value. This value is the final image path you can reference in your code.

Here is an example:

```js
import React from "react";
import logo from "./logo.png"; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

This ensures that when the project is built, Webpack will correctly move the images into the build folder, and provide us with correct paths.

This works in SCSS too:

```scss
.Logo {
  background-image: url(./logo.png);
}
```

<br>
