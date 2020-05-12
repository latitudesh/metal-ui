import React, { useState, useEffect, useRef, cloneElement } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

const positionType = {
  bottomLeft: "mt-2 left-0",
  bottomRight: "mt-2 right-0",
  topRight: "mb-2 bottom-full right-0",
  topLeft: "mb-2 bottom-full left-0",
};

const DropdownContent = ({ id, children }) => {
  if (typeof window === "undefined") return null;

  let element = useRef(
    document.getElementById(id) || document.createElement("div")
  );

  useEffect(() => {
    if (!document.getElementById(id)) {
      element.current.id = id;
      document.body.appendChild(element.current);
    }
    return () => {
      if (element.current.parentElement) {
        element.current.parentElement.removeChild(element.current);
      }
    };
  }, [id]);

  return createPortal(children, element.current);
};

const Dropdown = ({ content, position, children, className }) => {
  const dropdown = useRef();
  const portal = useRef();
  const [open, setOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const onOutSideClick = (event) => {
    if (
      dropdown.current.contains(event.target) ||
      (portal.current && portal.current.contains(event.target))
    ) {
      return;
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      const button = dropdown.current.getBoundingClientRect();
      const content = portal.current.getBoundingClientRect();
      const paddingTop = 10;

      if (position === "LeftTop") {
        setDropdownPosition({
          left: button.left,
          top: button.top - (content.height + paddingTop),
        });
      } else if (position === "RightTop") {
        setDropdownPosition({
          left: button.right - content.width,
          top: button.top - (content.height + paddingTop),
        });
      } else if (position === "RightBottom") {
        setDropdownPosition({
          left: button.right - content.width,
          top: button.bottom + paddingTop,
        });
      } else {
        setDropdownPosition({
          left: button.left,
          top: button.bottom + paddingTop,
        });
      }
    }
  }, [open]);

  useEffect(() => {
    document.addEventListener("mousedown", onOutSideClick);

    return () => {
      document.removeEventListener("mousedown", onOutSideClick);
    };
  }, []);

  return (
    <div
      ref={dropdown}
      className={classNames("relative inline-block text-left z-50", className)}
    >
      {cloneElement(children, { onClick: () => setOpen(!open) })}
      {open && (
        <DropdownContent id="dropdown-content">
          <div
            ref={portal}
            style={{ ...dropdownPosition }}
            className={"fixed z-50 w-56 min-w-0 shadow-lg"}
          >
            {content}
          </div>
        </DropdownContent>
      )}
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
