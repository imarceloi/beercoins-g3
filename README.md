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

<em>It was created for a challenge given by <b>BeerTech Talents</b>. The main objective of this challenge is to create an application where the customer can access a virtual wallet. In this virtual walled, the customer can check his balance, take a statement, and transfer amounts to another account.</em>

# Table of Contents

- [Available Scripts](#available-scripts)
  - [yarn start](#yarn-start)
  - [yarn test](#yarn-test)
  - [yarn build](#yarn-build)
- [Folder Structure](#folder-structure)
- [Installing a Dependency](#installing-a-dependency)
- [Importing a Component](#importing-a-component)
- [Adding a Stylesheet](#adding-a-stylesheet)
- [Adding Images and Fonts](#adding-images-and-fonts)

<br>
<br>

# Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Work in progress

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

<br>

# Folder Structure

After creation, your project should look like this:

```
📦beercoins-g3
 ┣ 📦src
 ┣  📂assets
 ┃ ┗ 📂scss
 ┃ ┃ ┗ 📜variables.scss
 ┣ 📂components
 ┃ ┣ 📂Accounts
 ┃ ┃ ┣ 📜Accounts.tsx
 ┃ ┃ ┗ 📜modal.tsx
 ┃ ┣ 📂Body
 ┃ ┃ ┣ 📜Body.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂GetThumb
 ┃ ┃ ┣ 📜GetThumb.scss
 ┃ ┃ ┣ 📜GetThumb.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Payments
 ┃ ┃ ┗ 📜Payments.tsx
 ┃ ┣ 📂PrivateRoute
 ┃ ┃ ┣ 📜PrivateRoute.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂SideBar
 ┃ ┃ ┣ 📜SideBar.tsx
 ┃ ┃ ┣ 📜Sidebar.scss
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Statement
 ┃ ┃ ┣ 📜Statement.scss
 ┃ ┃ ┣ 📜Statement.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂StyledTableRow
 ┃ ┃ ┗ 📜StyledTableRow.tsx
 ┃ ┣ 📂TableLoading
 ┃ ┃ ┣ 📜TableLoading.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂UserInfo
 ┃ ┃ ┣ 📂Balance
 ┃ ┃ ┃ ┣ 📂CurrentBalance
 ┃ ┃ ┃ ┃ ┣ 📜CurrentBalance.scss
 ┃ ┃ ┃ ┃ ┣ 📜CurrentBalance.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📜Balance.scss
 ┃ ┃ ┃ ┣ 📜Balance.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Profile
 ┃ ┃ ┃ ┣ 📜Profile.scss
 ┃ ┃ ┃ ┣ 📜Profile.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📜UserInfo.scss
 ┃ ┃ ┣ 📜UserInfo.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂config
 ┃ ┗ 📂axios
 ┃ ┃ ┣ 📜httpConfig.ts
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂constants
 ┃ ┗ 📜index.ts
 ┣ 📂context
 ┃ ┗ 📂Auth
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂images
 ┃ ┣ 📜logo.png
 ┃ ┣ 📜logo.svg
 ┃ ┗ 📜new-logo.png
 ┣ 📂interfaces
 ┃ ┣ 📜IAccount.d.ts
 ┃ ┣ 📜IAuthContextProps.ts
 ┃ ┣ 📜IBankPosting.d.ts
 ┃ ┣ 📜IDeposit.d.ts
 ┃ ┣ 📜IErrorMessages.ts
 ┃ ┣ 📜ISignIn.d.ts
 ┃ ┣ 📜ISignUp.d.ts
 ┃ ┣ 📜IUser.d.ts
 ┃ ┗ 📜OperationType.ts
 ┣ 📂screens
 ┃ ┣ 📂Home
 ┃ ┃ ┣ 📜Home.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂NotFound
 ┃ ┃ ┗ 📜NotFound.tsx
 ┃ ┣ 📂Operations
 ┃ ┃ ┣ 📜Operations.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Payments
 ┃ ┃ ┣ 📜Payments.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂SignIn
 ┃ ┃ ┣ 📂SignInForm
 ┃ ┃ ┃ ┣ 📜SignInForm.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📜SignIn.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜signInStyles.tsx
 ┃ ┗ 📂SignUp
 ┃ ┃ ┣ 📂SignUpForm
 ┃ ┃ ┃ ┣ 📜SignUpForm.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📜SignUp.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜signUpStyles.tsx
 ┣ 📂services
 ┃ ┣ 📂Accounts
 ┃ ┃ ┗ 📜accounts.service.ts
 ┃ ┣ 📂User
 ┃ ┃ ┗ 📜User.tsx
 ┃ ┗ 📜Auth.service.tsx
 ┣ 📂utils
 ┃ ┣ 📂cookieHandler
 ┃ ┃ ┣ 📜cookieHandler.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂formaters
 ┃ ┃ ┣ 📜cleanStringValue.ts
 ┃ ┃ ┣ 📜cnpjMask.ts
 ┃ ┃ ┣ 📜configure-requests.ts
 ┃ ┃ ┣ 📜formaters.ts
 ┃ ┃ ┗ 📜phoneMask.ts
 ┃ ┗ 📂themes
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜themes.tsx
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜routes.tsx
 ┣ 📜serviceWorker.ts
 ┗ 📜setupTests.ts
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

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
