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
      <p>The five boxing wizards jump quickly.</p>
    </Toast>
  ))
  .add("Success", () => (
    <Toast success>
      <p>The five boxing wizards jump quickly. The five boxing wizards jump very quickly.</p>
    </Toast>
  ))
  .add("Error", () => (
    <Toast error>
      <p>The five boxing wizards jump quickly. The five boxing wizards jump very quickly.</p>
    </Toast>
  ))
  .add("Close Icon", () => (
    <Toast showCloseIcon>
      <p>The five boxing wizards jump quickly. The five boxing wizards jump very quickly.</p>
    </Toast>
  ))
  .add("Custom dismiss time", () => (
    <Toast showCloseIcon dismissTime={200000}>
      <p>The five boxing wizards jump quickly. The five boxing wizards jump very quickly.</p>
    </Toast>
  ));
