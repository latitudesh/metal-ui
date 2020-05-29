import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Sidesheet from "./index";
import Button from "../Button";

storiesOf("Sidesheet", module)
  .addDecorator((getStory) => (
    <div className={"flex h-full items-center justify-center w-full mt-20"}>
      {getStory()}
    </div>
  ))
  .add("default", () => (
    <Sidesheet
      title={"Title"}
      content={<span className="text-gray-600">Content</span>}
    >
      <Button type="secondary" label="Open Sidesheet" />
    </Sidesheet>
  ))
  .add("with action", () => (
    <Sidesheet
      title={"Title"}
      action={<Button onClick={() => action("clicked")} label={"Action"} />}
      content={<span className="text-gray-600">Content</span>}
    >
      <Button type="secondary" label="Open Sidesheet" />
    </Sidesheet>
  ));
