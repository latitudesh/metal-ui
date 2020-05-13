# Metal UI

A shared set of UI components using React.

## How to use

Install package:

`npm install @maxihost/metal-ui`

Import the component:

`import { Button } from '@maxihost/metal-ui';`

## How to develop

The development mode is running into Storybook, so you need to clone the project, run `npm install` and then `npm run dev`. The Storybook tab will open automatically in your browser.

To test your changes locally is necessary creating a link between this project and the project you are importing the components. First you need to run `npm link` in the terminal you are running this project, after that you need to run `npm link PATH_TO_REACT` with the react path of the project you want to connect with Metal UI (example: `npm link ../maxihost-next/node_modules/react`). After you do these steps, you just need to run `npm link @maxihost/metal-ui` in the project you want to link with Metal UI.

After your changes on the Metal UI are done, just need to run `npm run build` to update the dist folder and automatically reload the linked project.
