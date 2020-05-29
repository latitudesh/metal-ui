import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SideSheet from "./index";
import Button from "../Button";

storiesOf("SideSheet", module)
  .addDecorator((getStory) => (
    <div className={"flex h-full items-center justify-center w-full mt-20"}>
      {getStory()}
    </div>
  ))
  .add("default", () => (
    <SideSheet
      title={"Title here"}
      content={<span className="text-gray-600">Content</span>}
    >
      <Button type="secondary" label="click here" />
    </SideSheet>
  ))
  .add("with action", () => (
    <SideSheet
      title={"Title here"}
      action={<Button onClick={() => action("clicked")} label={"Action"} />}
      content={<span className="text-gray-600">Content</span>}
    >
      <Button type="secondary" label="click here" />
    </SideSheet>
  ));
