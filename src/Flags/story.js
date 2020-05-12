import React from "react";
import { storiesOf } from "@storybook/react";
import BRFlag from "./BRFlag";
import AUFlag from "./AUFlag";
import USFlag from "./USFlag";

storiesOf("Flag", module)
  .add("size props", () => <AUFlag size={128} />)
  .add("AUFlag", () => <AUFlag />)
  .add("BRFLag", () => <BRFlag />)
  .add("USFlag", () => <USFlag />);