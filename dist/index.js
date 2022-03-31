const Table = require("./Table");
const Header = require("./Header");
const Content = require("./Content");
const Button = require("./Button");
const Box = require("./Box");
const Sidesheet = require("./Sidesheet");
const Skeleton = require("./Skeleton");
const Toast = require("./Toast");
const Input = require("./Input");
const Textarea = require("./Textarea");
const Select = require("./Select");
const Avatar = require("./Avatar/index");
const Badge = require("./Badge");
const SpinningDots = require("./SpinningDots");
const Feedback = require("./Feedback");
const DropdownMenu = require("./DropdownMenu");
const Typography = require("./Typography");
const Tabs = require("./Tabs");
const RadioGroup = require("./RadioGroup");
const GlobalStyles = require("./GlobalStyles");

module.exports = {
  Table,
  Header,
  Content,
  Button,
  Box,
  Sidesheet,
  Skeleton,
  Toast,
  Input,
  Textarea,
  Select,
  Avatar,
  Badge,
  SpinningDots,
  Feedback,
  DropdownMenu,
  GlobalStyles,
  // Re export internals for backward compatibility
  ...DropdownMenu,
  Typography,
  ...Typography,
  // We cannot export Tabs because it has an internal component that is also named Tabs
  ...Tabs,
  RadioGroup
};
