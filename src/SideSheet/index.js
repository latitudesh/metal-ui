import React, { useState, useEffect, useRef, cloneElement } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

const SideSheetContent = ({ id, children }) => {
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

const SideSheet = ({
  content,
  position = "right",
  children,
  className,
  width = 200,
  height = 200,
}) => {
  const sideSheet = useRef();
  const portal = useRef();
  const [open, setOpen] = useState(false);
  const [transitionIn, setTransitionIn] = useState(false);
  const [sideSheetPosition, setSideSheetPosition] = useState(null);

  const onOutSideClick = (event) => {
    if (
      sideSheet.current.contains(event.target) ||
      (portal.current && portal.current.contains(event.target))
    ) {
      return;
    } else {
      setTransitionIn(false);
      setTimeout(() => setOpen(false), 500);
    }
  };

  useEffect(() => {
    if (position === "left") {
      setSideSheetPosition({
        left: transitionIn ? 0 : width * -1,
        top: 0,
        bottom: 0,
        width: width,
      });
    } else if (position === "top") {
      setSideSheetPosition({
        left: 0,
        top: transitionIn ? 0 : height * -1,
        width: "100vw",
        height: height,
      });
    } else if (position === "bottom") {
      setSideSheetPosition({
        left: 0,
        bottom: transitionIn ? 0 : height * -1,
        width: "100vw",
        height: height,
      });
    } else {
      setSideSheetPosition({
        right: transitionIn ? 0 : width * -1,
        top: 0,
        bottom: 0,
        width: width,
      });
    }
  }, [open, transitionIn]);

  useEffect(() => {
    document.addEventListener("mousedown", onOutSideClick);

    return () => {
      document.removeEventListener("mousedown", onOutSideClick);
    };
  }, []);

  return (
    <div
      ref={sideSheet}
      className={classNames("relative inline-block text-left", className)}
    >
      {cloneElement(children, {
        onClick: (e) => {
          e.stopPropagation();
          setTransitionIn(false);
          if (!open) {
            setOpen(true);
            setTimeout(() => setTransitionIn(true), 0);
          }
        },
      })}
      {open && (
        <SideSheetContent id="sidesheet-content">
          <div
            className={classNames(
              "fixed inset-0 opacity-25 duration-300 delay-200 transition",
              {
                "bg-black": transitionIn,
                "bg-transparent": !transitionIn,
              }
            )}
          />
          <div
            ref={portal}
            style={{
              ...sideSheetPosition,
            }}
            className={
              "fixed z-200 min-w-0 bg-white duration-300 delay-200 transition-all"
            }
          >
            {content}
          </div>
        </SideSheetContent>
      )}
    </div>
  );
};

SideSheet.propTypes = {
  content: PropTypes.element,
  position: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default SideSheet;
