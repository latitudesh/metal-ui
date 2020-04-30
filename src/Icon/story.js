import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ActivityIcon from "./ActivityIcon";
import BellIcon from "./BellIcon";
import CheveronDownIcon from "./CheveronDownIcon";
import HelpIcon from "./HelpIcon";
import HomeIcon from "./HomeIcon";
import ServersIcon from "./ServersIcon";
import SettingsIcon from "./SettingsIcon";
import TeamIcon from "./TeamIcon";
import OkIcon from "./OkIcon";
import SortingIcon from "./SortingIcon";

storiesOf("Icon", module)
  .add("onClick props", () => <ActivityIcon onClick={action("clicked")} />)
  .add("width props", () => <ActivityIcon size={100} />)
  .add("color props", () => <ActivityIcon color="red" />)
  .add("Activity", () => <ActivityIcon />)
  .add("Bell", () => <BellIcon />)
  .add("Cheveron Down", () => <CheveronDownIcon />)
  .add("Help", () => <HelpIcon />)
  .add("Home", () => <HomeIcon />)
  .add("Servers", () => <ServersIcon />)
  .add("Settings", () => <SettingsIcon />)
  .add("Team", () => <TeamIcon />)
  .add("Ok", () => <OkIcon />)
  .add("Sorting", () => <SortingIcon />);
