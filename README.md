# Nuxt Aos

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt module for adding animate on scroll to your application.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [📖 &nbsp;Documentation](https://github.com/egidiusmengelberg/nuxt-aos#readme)

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Easily add animate on scroll library to your nuxt app

## Quick Setup

1. Add `nuxt-aos` dependency to your project

```bash
npx nuxi@latest module add aos
```

1. (optional) Add aos config to `nuxt.config.js`, scroll down for more info.

```

That's it! You can now use Aos in your Nuxt app on every page 🚀

For example:

```html
<div data-aos="fade-up"></div>
```

A list of available animations can be found at [https://michalsnik.github.io/aos/](https://michalsnik.github.io/aos/)

## Development

```bash
# Install dependencies
yarn install

# Generate type stubs
yarn run dev:prepare

# Develop with the playground
yarn run dev

# Build the playground
yarn run dev:build

# Run ESLint
yarn run lint

# Run Vitest
yarn run test
yarn run test:watch

# Release new version
yarn run release
```

## Configuration

You can configure nuxt-aos in `nuxt.config.js` with the `aos`

```js
export default defineNuxtConfig({
  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  }
})
```


## API

You can also use AOS API, for now there are two methods available:

```js
const { $refreshAos, $refreshHardAos } = useNuxtApp()

$refreshAos()

$refreshHardAos()
```

For details, refer to [AOS API](https://github.com/michalsnik/aos?tab=readme-ov-file#api).

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-aos/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-aos

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-aos.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-aos

[license-src]: https://img.shields.io/npm/l/nuxt-aos.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-aos

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com