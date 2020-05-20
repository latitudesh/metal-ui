import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import './Skeleton.css';

const Skeleton = ({ width, height, className }) => {
  return (
    <div>
      <span
        style={{ width: width, minHeight: height }}
        className={classNames(
          "skeleton",
          className
        )}
      ></span>
    </div>
  );
};

Skeleton.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Skeleton.defaultProps = {
  width: 160,
  height: 24
}

export default Skeleton;
