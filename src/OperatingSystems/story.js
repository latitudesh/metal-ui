import React from "react";
import { storiesOf } from "@storybook/react";
import CentOS from "./CentOS";

storiesOf("OperatingSystem", module)
  .add("size props", () => <CentOS size={128} />)
  .add("CentOS", () => <CentOS />);