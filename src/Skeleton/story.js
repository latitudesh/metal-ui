import React from "react";
import { storiesOf } from "@storybook/react";
import Skeleton from "./index";

storiesOf("Skeleton", module)
  .add("width={160} props", () => <Skeleton width={160} />)
  .add("height={24} props", () => <Skeleton height={24} />)
  .add("with className", () => <Skeleton height={24} className="mt-5 ml-3" />);
