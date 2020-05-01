import React, { useState, useEffect, useRef, cloneElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

const positionType = {
  bottomLeft: "mt-2 left-0",
  bottomRight: "mt-2 right-0",
  topRight: "mb-2 bottom-full right-0",
  topLeft: "mb-2 bottom-full left-0",
};

const Dropdown = ({ content, position, children, className }) => {
  const dropdown = useRef();
  const [open, setOpen] = useState(false);
  const cx = classNames.bind(positionType);

  const handleClick = (event) => {
    if (dropdown.current.contains(event.target)) {
      return;
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const dropdownPosition = cx("absolute w-56 min-w-0 shadow-lg", {
    [position]: true,
  });

  return (
    <div
      ref={dropdown}
      className={classNames("relative inline-block text-left z-50", className)}
    >
      {cloneElement(children, { onClick: () => setOpen(!open) })}
      {open && <div className={dropdownPosition}>{content}</div>}
    </div>
  );
};

Dropdown.propTypes = {
  content: PropTypes.element,
  position: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
};

export default Dropdown;
