import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import Input from "../../src/Input";

describe("Snapshots/Components/Input", () => {
  it("Renders input", () => {
    const component = renderer.create(<Input />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Renders input with suffix", () => {
    const component = renderer.create(<Input type={"number"} min={0} step={10} max={100} suffix={"TB"}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Calls onChange correctly", async () => {
    const mockOnChange = jest.fn();
    render(
      <Input onChange={mockOnChange} label={"Name"}/>
    );

    userEvent.type(screen.getByLabelText("Name"), "J");
    expect(mockOnChange.mock.calls[0][0]).toBe("J");
    expect(mockOnChange.mock.calls[0][1].type).toBe("change");
  });
});
