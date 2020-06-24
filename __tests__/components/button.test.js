import React from "react";
import renderer from "react-test-renderer";

import { Button } from "../../src";

describe("Snapshots/Components/Button", () => {
  it("Render button", () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
