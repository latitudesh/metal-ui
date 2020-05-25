import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Box = ({
  flex,
  alignItems,
  justifyContent,
  backgroundColor,
  flexDirection,
  flexWrap,
  children,
  className,
  rootCard,
  noPadding,
}) => {
  return (
    <div
      className={classNames("overflow-hidden", className, {
        flex: Boolean(flex),
        "bg-white": !Boolean(backgroundColor),
        [`items-${alignItems}`]: Boolean(alignItems),
        [`justify-${justifyContent}`]: Boolean(justifyContent),
        [`bg-${backgroundColor}`]: Boolean(backgroundColor),
        [`flex-${flexDirection}`]: Boolean(flexDirection),
        [`mb-4 shadow rounded-sm`]: Boolean(rootCard),
        [`px-6 py-4`]: !Boolean(noPadding),
        [`flex-${flexWrap}`]: Boolean(flexWrap)
      })}
    >
      {children}
    </div>
  );
};

Box.propTypes = {
  flex: PropTypes.bool,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  backgroundColor: PropTypes.string,
  flexDirection: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  rootCard: PropTypes.bool,
  noPadding: PropTypes.bool,
  flexWrap: PropTypes.string
};

export default Box;
