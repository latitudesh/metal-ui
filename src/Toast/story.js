import React from "react";
import { storiesOf } from "@storybook/react";
import Toast from "./index";

storiesOf("Toast", module)
  .addDecorator((getStory) => (
    <div className={"flex h-full items-center justify-center w-full mt-20"}>
      {getStory()}
    </div>
  ))
  .add("Default", () => (
    <Toast>
      <p>Text</p>
    </Toast>
  ))
  .add("Success", () => (
    <Toast success>
      <p>Text</p>
    </Toast>
  ))
  .add("Error", () => (
    <Toast error>
      <p>Text</p>
    </Toast>
  ))
  .add("Close Icon", () => (
    <Toast showCloseIcon>
      <p>Text</p>
    </Toast>
  ))
  .add("Custom dismiss time", () => (
    <Toast showCloseIcon dismissTime={2000}>
      <p>Text</p>
    </Toast>
  ));
