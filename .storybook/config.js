import { configure } from "@storybook/react";
import "../styles/index.css";

// automatically import all story.js files
const req = require.context("../", true, /story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
