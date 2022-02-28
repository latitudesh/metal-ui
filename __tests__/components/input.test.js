import React from "react";
import renderer from "react-test-renderer";

import Input from "../../src/Input";

describe("Snapshots/Components/Input", () => {
  it("Render input", () => {
    const component = renderer.create(<Input />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Render input with addon", () => {
    const component = renderer.create(<Input type={'number'} min={0} step={10} max={100} rightAddon={'TB'}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
