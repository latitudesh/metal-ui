### Note: Metal UI is not ready for production. If you use it, keep in mind things *will* break.

# Metal UI

Metal UI is a set of UI Components using React, CSS Modules and Tailwindcss built by the [Maxihost](https://www.maxihost.com) team.

- Heavily opinionated
- Built for desktop applications

Metal UI uses the [8-Point Grid](https://spec.fm/specifics/8-pt-grid) but sticks to TailwindCSS' [default spacing scale](https://tailwindcss.com/docs/customizing-spacing/#default-spacing-scale) instead of implementing its own, mainly to keep things simple.

## Component documentation

- [Storybook](https://maxihost.github.io/metal-ui/)

## Install and use components

Install package:

`npm install @maxihost/metal-ui`

Import the component:

`import { Button } from '@maxihost/metal-ui';`

## Component development

After cloning and installing the project, run it with: 

`npm run dev` 

A Storybook tab will open automatically in your browser.

If you want to develop a new component or make changes to one, you might want to run it on a separate project. Go to the directory where you have Metal UI installed and run: 

`npm link`

Then go to the project where you want to use Metal UI and run:

`npm link @maxihost/metal-ui`

After making changes to components, you need to build the project with.

 `npm run build`

This will update the dist folder and automatically reload the linked project.