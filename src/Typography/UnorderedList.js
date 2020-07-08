import React, { PureComponent } from "react";
import classNames from "classnames";

export default class UnorderedList extends PureComponent {

  render() {
    const { children, ...props } = this.props;

    const finalChildren = React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return child;
      }

      return React.cloneElement(child, {
        ...child.props,
      });
    });

    return (
      <ul
        className={classNames("leading-normal list-disc p-0 m-0 ml-4", {})}
        {...props}
      >
        {finalChildren}
      </ul>
    );
  }
}
