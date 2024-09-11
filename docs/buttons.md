# 🪐 Astral Button

The astral-button component is part of the AstralUI kit, based on Material Design specifications. This component allows you to create buttons with various styles and behaviors, such as raised buttons, floating action buttons (FAB), extended FABs, and more.

## Basic Usage

To use the button, include the component in your HTML with text or an icon inside the slot:

```html
<astral-button>Default Button</astral-button>
```

## Examples

Raised Button

```html
<astral-button raised>Raised Button</astral-button>
```

![Raised button](https://firebasestorage.googleapis.com/v0/b/astral-ui.appspot.com/o/raised.png?alt=media&token=900279cf-a7c3-48b4-ba26-923d75e50af6)

Stroked Button

```html
<astral-button stroked>Stroked Button</astral-button>
```

![Stroked button](https://firebasestorage.googleapis.com/v0/b/astral-ui.appspot.com/o/stroked.png?alt=media&token=a0687cad-3974-4e49-bb53-2ea180854953)

Disabled Button

```html
<astral-button disabled>Disabled Button</astral-button>
```

![Disabled button](https://firebasestorage.googleapis.com/v0/b/astral-ui.appspot.com/o/disabled.png?alt=media&token=45c696de-e99b-4b01-8990-e3e84a135a02)

Icon Button

```html
<astral-button icon>
  <i class="material-icons">add</i>
</astral-button>
```

![Icon button](https://firebasestorage.googleapis.com/v0/b/astral-ui.appspot.com/o/icon.png?alt=media&token=0df2709a-3b0d-487d-812f-bcb0e3e12bf0)

Floating Action Button (FAB)

```html
<astral-button fab>
  <i class="material-icons">add</i>
</astral-button>
```

![Raised button](https://firebasestorage.googleapis.com/v0/b/astral-ui.appspot.com/o/fab.png?alt=media&token=e9d90f1e-adfe-4158-9a89-6b12e0333537)

Extended Floating Action Button (Extended FAB)

```html
<astral-button extendedfab icon> <i class="material-icons">add</i> Extended FAB </astral-button>
```

![Extended FAB](https://firebasestorage.googleapis.com/v0/b/astral-ui.appspot.com/o/extendedfab.png?alt=media&token=33fc1d17-927a-4fb9-a9b9-02bf2d043209)

## Customizaton

You can use variety of colors with the color attribute : `transparent`, `primary`, `secondary`, `success`, `warning`.

```html
<astral-button color="primary">Primary Button</astral-button>
```

![Transparent](https://firebasestorage.googleapis.com/v0/b/astral-ui.appspot.com/o/transparent.png?alt=media&token=72d13431-ff0a-401c-b20e-7e919ec57535) ![Primary](https://firebasestorage.googleapis.com/v0/b/astral-ui.appspot.com/o/primary.png?alt=media&token=6c223c95-ecd0-4e2b-8c87-e1e71bd6810c) ![Secondary](https://firebasestorage.googleapis.com/v0/b/astral-ui.appspot.com/o/secondary.png?alt=media&token=73ddec7c-9751-41fe-ad8f-bf87232d573d) ![Success](https://firebasestorage.googleapis.com/v0/b/astral-ui.appspot.com/o/success.png?alt=media&token=456206c7-49af-462a-842b-67cb80c89257) ![Warning](https://firebasestorage.googleapis.com/v0/b/astral-ui.appspot.com/o/warning.png?alt=media&token=49d2fbde-1110-4552-8759-7186404d1803)
