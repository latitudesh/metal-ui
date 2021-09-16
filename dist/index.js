const Table = require( "./Table");
const Header = require( "./Header");
const Content = require( "./Content");
const Button = require( "./Button");
const Box = require( "./Box");
const Sidesheet = require( "./Sidesheet");
const Skeleton = require( "./Skeleton");
const Toast = require( "./Toast");
const Input = require( "./Input");
const Textarea = require( "./Textarea");
const Select = require( "./Select");
const Avatar = require( "./Avatar/index");
const AlgoliaSearch = require( "./AlgoliaSearch");
const Badge = require( "./Badge");
const SpinningDots = require( "./SpinningDots");
const Feedback = require( "./Feedback");
const DropdownMenu = require("./DropdownMenu");
const Typography = require( "./Typography");

// These 4 are also included in Typography
const Text = require( "./Text");
const Heading = require( "./Heading");
const UnorderedList = require( "./UnorderedList");
const ListItem = require( "./ListItem");

const Tabs = require("./Tabs");

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
    AlgoliaSearch,
    Badge,
    SpinningDots,
    Feedback,
    DropdownMenu,
    Typography,
    Text,
    Heading,
    UnorderedList,
    ListItem,
    // Re export internals for backward compatibility
    ...DropdownMenu,
    // We cannot export Tabs because it has an internal component that is also named Tabs
    ...Tabs,
}
