### Note: Metal UI is not ready for production. If you use it, keep in mind things *will* break.

# Metal UI

Metal UI is a set of UI Components using React and TailwindCSS built by the [Maxihost](https://www.maxihost.com) team.

It uses the [8-Point Grid](https://spec.fm/specifics/8-pt-grid) but sticks to TailwindCSS' [default spacing scale](https://tailwindcss.com/docs/customizing-spacing/#default-spacing-scale) instead of implementing its own, mainly to keep things simple.

This package does not export styles, fonts or images, including Tailwind's. You should add those directly into your project. This is done to keep the package small and to avoid conflicts with your PurgeCSS settings.

Despite that, you shoudn't treat this as an utility system. Components are heavily opinionated and most don't allow for styling flexibility.

We built this for desktop applications, so most components are not responsive.

## Installing

Install package:

`npm install @maxihost/metal-ui`

## Set up

It's highly recommended that you do some additional set up. Here's an example of how to use Metal UI on a NextJS project.

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

```javascript
// tailwind.config.js
// make sure to download and add the font files to /public/fonts
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './node_modules/@maxihost/metal-ui/dist/**/*.{js,jsx,ts,tsx}', // important, otherwise purge will remove all Metal UI styles
    './next.config.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    function ({ addBase, addComponents, theme }) {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontNamedInstance: 'Regular',
            fontDisplay: 'swap',
            src:
              'url("/fonts/Inter-roman.var-latin.woff2?3.13") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'italic',
            fontNamedInstance: 'Italic',
            fontDisplay: 'swap',
            src:
              'url("/fonts/Inter-italic.var-latin.woff2?3.13") format("woff2")',
          },
        },
      ])
    },
  ],
}
```

```javascript
// /styles/index.css
/* purgecss start ignore */
@tailwind base;
@tailwind components;
/* purgecss end ignore */
@tailwind utilities;
```

## Example usage 
Import the component:

`import { Button } from '@maxihost/metal-ui';`

## Component Storybook

- [Storybook](https://maxihost.github.io/metal-ui/)

## Developing

After cloning and installing the project, run it with: 

`npm run dev` 

A Storybook tab will open automatically in your browser.

If you want to develop a new component or make changes to one, you might want to run it on a separate project. Go to the directory where you have Metal UI installed and run: 

`npm link`

You'll need to link React too to avoid conflicts

`npm link path-to-your-project/node_modules/react` 

Then go to the project where you want to use Metal UI and run:

`npm link @maxihost/metal-ui`

After making changes to components, you need to build the project with.

 `npm run build`

This will update the dist folder and automatically reload the linked project.