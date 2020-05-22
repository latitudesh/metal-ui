import React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "./index";
import Button from "../Button";

storiesOf("Modal", module)
  .addDecorator((getStory) => (
    <div className={"flex h-full items-center justify-center w-full mt-20"}>
      {getStory()}
    </div>
  ))
  .add("default", () => (
    <Modal content={<p>TEST</p>}>
      <Button label="Open modal" />
    </Modal>
  ))
  ;
