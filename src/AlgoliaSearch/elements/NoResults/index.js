import React from "react";
import Text from "../../../Text";

const NoResults = () => {
  return (
    <li className="pb-2 pt-2" style={{ display: "block" }}>
      <Text is="p" className="p-2">
        No results were found...
      </Text>
    </li>
  );
};

export default NoResults;
