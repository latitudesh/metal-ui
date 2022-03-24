import React, { PureComponent } from "react";
import Text from "../Text";

export default class ListItem extends PureComponent {
  static propTypes = {
    ...Text.propTypes
  };

  render() {
    const { children, ...props } = this.props;

    return (
      <Text is='li' {...props}>
        {children}
      </Text>
    );
  }
}
