import { storiesOf } from "@storybook/react";
import React from "react";
import Box from "../Box";
import { Avatar } from "..";

const names = [
  "Cheryl Carter",
  "Heather Morales",
  "Sean Jackson",
  "Catherine Anderson",
  "Jack Phillips",
  "Julia Williamson",
  "Jonathan Martin",
  "Kevin Niparko",
];

const anonymousIds = [1591, 13184, 1055, 4199, 4824, 11394, 1965, 13023];
const colors = [
  "neutral",
  "blue",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "purple",
];

storiesOf("Avatar", module)
  .add("Basic", () => (
    <Box>
      <Box rootCard className="mb-5">
        <div className="mb-4 text-gray-600">
          <div className="text-2xl">Basic</div>
          <div className="text">
            Avatar with the <code>name</code> and <code>size</code> properties.
          </div>
        </div>
        {names.map((name) => (
          <Avatar key={name} name={name} size={40} className="mr-2" />
        ))}
      </Box>
    </Box>
  ))
  .add("Solid", () => (
    <Box>
      <Box rootCard className="mb-5">
        <div className="mb-4 text-gray-600">
          <div className="text-2xl">Solid</div>
          <div className="text">
            Use the <code>isSolid</code> property to create a solid avatar.
          </div>
        </div>
        {names.map((name) => (
          <Avatar key={name} isSolid name={name} size={40} className="mr-2" />
        ))}
      </Box>
    </Box>
  ))
  .add("Sizes", () => (
    <Box>
      <Box rootCard>
        <div className="mb-4 text-gray-600">
          <div className="text-2xl">Sizes</div>
          <div className="text">
            Use the <code>size</code> property to change sizes. The initials
            will size automatically.
          </div>
        </div>
        <Avatar
          isSolid
          marginRight={16}
          name={names[0]}
          size={16}
          className="mr-2"
        />
        <Avatar marginRight={16} name={names[1]} size={24} className="mr-2" />
        <Avatar marginRight={16} name={names[2]} size={32} className="mr-2" />
        <Avatar marginRight={16} name={names[3]} size={40} className="mr-2" />
        <Avatar marginRight={16} name={names[4]} size={96} className="mr-2" />
        <Avatar marginRight={16} name={names[5]} size={128} className="mr-2" />
      </Box>
    </Box>
  ))
  .add("Override color", () => (
    <Box>
      <Box rootCard>
        <div className="mb-4 text-gray-600">
          <div className="text-2xl">Override color</div>
          <div className="text">
            Manually override the color using the <code>color</code> property.
            Eg. <code>color="green"</code>.
          </div>
        </div>
        {colors.map((color, index) => (
          <Avatar
            key={color}
            color={color}
            name={names[index]}
            size={40}
            className="mr-2"
          />
        ))}
      </Box>
    </Box>
  ))
  .add("Solid with colors", () => (
    <Box>
      <Box rootCard>
        <div className="mb-4 text-gray-600">
          <div className="text-2xl">Solid with colors</div>
          <div className="text">
            You can use the <code>color</code> and <code>isSolid</code>{" "}
            properties in conjunction.
          </div>
        </div>
        {colors.map((color, index) => (
          <Avatar
            key={color}
            isSolid
            color={color}
            name={names[index]}
            size={40}
            className="mr-2"
          />
        ))}
      </Box>
    </Box>
  ))
  .add("Anonymous users", () => (
    <Box>
      <Box rootCard className="mb-5">
        <div className="mb-4 text-gray-600">
          <div className="text-2xl">Anonymous users</div>
          <div className="text">
            In cases where it's not possible to determine the name of the user,
            use the <code>hashValue</code> property to automatically determine
            the color.
          </div>
        </div>
        {anonymousIds.map((id) => (
          <Avatar
            key={id}
            hashValue={id}
            name="Anonymous User"
            size={40}
            className="mr-2"
          />
        ))}
      </Box>
    </Box>
  ));
