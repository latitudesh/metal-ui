import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Sidesheet from "./index";
import Button from "../Button";

storiesOf("Sidesheet", module)
  .addDecorator((getStory) => (
    <div className={"flex h-full items-center justify-center w-full mt-20"}>
      {getStory()}
    </div>
  ))
  .add("default", () => {
    const [isShown, setIsShown] = useState(false);
    return (
      <Sidesheet
        title={"Title"}
        onClose={() => setIsShown(false)}
        isShown={isShown}
        content={<span className="text-gray-600">Content</span>}
      >
        <Button
          type="secondary"
          onClick={() => setIsShown(true)}
          label="Open Sidesheet"
        />
      </Sidesheet>
    );
  })
  .add("with action", () => {
    const [isShown, setIsShown] = useState(false);
    return (
      <div>
        <Sidesheet
          onClose={() => setIsShown(false)}
          title={"Title"}
          isShown={isShown}
          content={<span className="text-gray-600">Content</span>}
          action={<Button onClick={() => setIsShown(false)} label={"Action"} />}
        >
          <Button onClick={() => setIsShown(true)} label={"Action"} />
        </Sidesheet>
      </div>
    );
  });
