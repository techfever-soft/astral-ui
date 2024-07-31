# 🪐 AstralUI

#### A kit of web components, for Material Design lovers

Following Material Design 3 specs

![NPM Version](https://img.shields.io/npm/v/%40techfever%2Fastral-ui) ![NPM Downloads](https://img.shields.io/npm/dw/%40techfever%2Fastral-ui)

- Universal
- Responsive
- Fully customizable
- Extensible
- Supports dark/light mode



## [DEMO & DOCUMENTATION](https://astral-ui.dev)

### Components

- [x] Buttons
- [x] Panes
- [x] Accordions
- [x] Breadcrumbs
- [x] Checkboxes
- [ ] More components coming soon...

See [ROADMAP.md](https://github.com/techfever-soft/astral-ui/blob/main/ROADMAP.md) for more components

### Installation

```bash
npm install @techfever/astral-ui
```

### Usage

(Optional) If ripples are not working by default, import MDC web components using :
```html
<link href="node_modules/@techfever/astral-ui/www/assets/material-components-web.min.css" rel="stylesheet" />
```
```html
<script src="node_modules/@techfever/astral-ui/www/assets/material-components-web.min.js"></script>
```


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
:root {
  --astral-primary-font: 'K2D', sans-serif;
  --astral-secondary-font: 'Merriweather', serif;

  --astral-primary-color: #6200ea;
  --astral-primary-contrast-color: #fff;
  --astral-secondary-color: #03dac6;
  --astral-secondary-contrast-color: #000;
  --astral-success-color: #00c853;
  --astral-success-contrast-color: #fff;
  --astral-warning-color: #ff4141;
  --astral-warning-contrast-color: #fff;

  --astral-text-color-light: #212121;
  --astral-background-color-light: #efefef;
  --astral-text-color-dark: #fff;
  --astral-background-color-dark: #212121;
}
```

Use it directly in your template :

```html
<astral-button color="primary" stroked>Click me!</astral-button>
```

### Dark / Light mode
AstralUI supports dark and light modes. 
You can put the attribute `data-theme` to dark for example in the root `html` tag (documentElement). 

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

