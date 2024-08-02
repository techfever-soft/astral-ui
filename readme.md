# 🪐 AstralUI

#### A kit of web components, for Material Design lovers

Following Material Design 3 specs

![NPM Version](https://img.shields.io/npm/v/%40techfever%2Fastral-ui) ![NPM Downloads](https://img.shields.io/npm/dw/%40techfever%2Fastral-ui)

- Universal (web components support any framework)
- Responsive (adapts to different screen sizes)
- Fully customizable (change colors, sizes, and other properties)
- Extensible (easily add new features and components)
- Supports dark/light mode (switch between themes seamlessly)

#### [CODESANDBOX (Angular)](https://codesandbox.io/p/github/techfever-soft/astral-ui-example/main) 
#### [DEMO & DOCUMENTATION](https://astral-ui.dev)
#### [CHANGELOG.md](https://github.com/techfever-soft/astral-ui/blob/main/CHANGELOG.md)

### Components

- [x] Buttons
- [x] Panes
- [x] Accordions
- [x] Breadcrumbs
- [x] Checkboxes
- [ ] Modals
- [ ] More components coming soon...

See [ROADMAP.md](https://github.com/techfever-soft/astral-ui/blob/main/ROADMAP.md) for more components

### Installation

```bash
npm install @techfever/astral-ui
```

### Usage

Define custom elements in your main class :
```ts
import { defineCustomElements } from '@techfever/astral-ui/loader';

class MyClass {
  constructor() {
    defineCustomElements(window);
  }
}
```

NOTE: For Angular users, put in your schemas : `CUSTOM_ELEMENTS_SCHEMA`

Use the CSS variables to customize your theme :

```scss
// Use the Astral UI SCSS functions to set your own color variables
@use "../node_modules/@techfever/astral-ui/dist/astralui/scss/functions/rgb.scss"
  as *;

// Import the Web Components CSS for Ripples
@import "../node_modules/@techfever/astral-ui/dist/astralui/assets/material-components-web.min.css";


:root {
  --astral-primary-font: "K2D", sans-serif;
  --astral-secondary-font: "Merriweather", serif;

  // NOTE: Define your own palette
  @include set-color-variable("#6200ea", --astral-primary-color);
  @include set-color-variable("#ffffff", --astral-primary-contrast-color);
  @include set-color-variable("#03dac6", --astral-secondary-color);
  @include set-color-variable("#212121", --astral-secondary-contrast-color);
  @include set-color-variable("#00c853", --astral-success-color);
  @include set-color-variable("#ffffff", --astral-success-contrast-color);
  @include set-color-variable("#ff4141", --astral-warning-color);
  @include set-color-variable("#ffffff", --astral-warning-contrast-color);

  @include set-color-variable("#212121", --astral-text-color-light);
  @include set-color-variable("#efefef", --astral-background-color-light);
  @include set-color-variable("#ffffff", --astral-text-color-dark);
  @include set-color-variable("#212121", --astral-background-color-dark);

  // NOTE: For supporting dark/light mode you need to bind variables
  &[data-theme="dark"] {
    --astral-text-color: rgba(var(--astral-text-color-dark));
    --astral-background-color: rgba(var(--astral-background-color-dark));
  }

  &[data-theme="light"] {
    --astral-text-color: rgba(var(--astral-text-color-light));
    --astral-background-color: rgba(var(--astral-background-color-light));
  }
}

// NOTE: Use directly the variables of Astral UI in your theme

body {
  background: var(--astral-background-color);
  color: var(--astral-text-color);
}

// ... Your own CSS rules here ...

```

Use it directly in your template :

```html
<astral-button color="primary" stroked>Click me!</astral-button>
```

### Dynamic dark / light mode
AstralUI supports dark and light modes. 
You can put the attribute `data-theme` to "dark" or "light" in the root `html` tag (document.documentElement). 

You can define the initial theme based on the system's preference:

```ts
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}
```


You can toggle between these modes using JavaScript. Here's an example :

```ts
const toggleThemeButton = document.querySelector('#toggle-theme-button');
const icon = toggleThemeButton.querySelector('i');
const buttonText = toggleThemeButton.querySelector('#toggle-theme-button-text');

const isDarkTheme = () => document.documentElement.getAttribute('data-theme') === 'dark';

const updateThemeUI = () => {
  if (isDarkTheme()) {
    icon.innerText = 'light_mode';
    buttonText.innerText = 'Toggle light mode';
  } else {
    icon.innerText = 'dark_mode';
    buttonText.innerText = 'Toggle dark mode';
  }
};

updateThemeUI();

toggleThemeButton.addEventListener('click', () => {
  if (isDarkTheme()) {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  updateThemeUI();
});
```

### License

AstralUI is licensed under the MIT License. See the LICENSE file for more details.

