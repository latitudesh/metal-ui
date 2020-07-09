import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Toast from "./index";
import Button from "../Button";

storiesOf("Toast", module)
  .addDecorator((getStory) => (
    <div className={"flex h-full items-center justify-center w-full mt-20"}>
      {getStory()}
    </div>
  ))
  .add("Default", () => <Toast text="The five boxing wizards jump quickly." />)
  .add("Success", () => (
    <Toast
      success
      text="The five boxing wizards jump quickly. The five boxing wizards jump very quickly."
    />
  ))
  .add("Error", () => (
    <Toast
      error
      text="The five boxing wizards jump quickly. The five boxing wizards jump very
        quickly."
    />
  ))
  .add("Close Icon", () => (
    <Toast
      showCloseIcon
      text="The five boxing wizards jump quickly. The five boxing wizards jump very
        quickly."
    />
  ))
  .add("Custom dismiss time", () => (
    <Toast
      showCloseIcon
      dismissTime={200000}
      text="The five boxing wizards jump quickly. The five boxing wizards jump very
        quickly."
    />
  ))
  .add("Triggered by onClick", () => {
    const [showToast, setShowToast] = useState(false);
    return (
      <>
        <Button
          type="secondary"
          onClick={() => setShowToast(true)}
          label="Show Toast"
        />
        {showToast && (
          <Toast
            onCloseToast={() => setShowToast(false)}
            text="The five boxing wizards jump quickly. The five boxing wizards jump very
        quickly."
          />
        )}
      </>
    );
  });
