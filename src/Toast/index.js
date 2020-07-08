import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

function XIcon() {
  return (
    <svg
      fill="none"
      className="text-gray-600"
      stroke="currentColor"
      viewBox="0 0 24 24"
      role="button"
      width="16px"
      height="16px"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
}

const ToastContent = ({ id, children }) => {
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

const Toast = ({
  children,
  error,
  success,
  showCloseIcon,
  hide,
  dismissTime = 6000,
}) => {
  const [open, setOpen] = useState(true);
  const [showToast, setShowToast] = useState(hide);

  const onCloseToast = () => {
    setShowToast(false);
    setOpen(false);
  };

  useEffect(() => {
    if (dismissTime) {
      const interval = setInterval(() => {
        onCloseToast();
      }, dismissTime);

      return () => {
        clearInterval(interval);
      };
    }
  }, [dismissTime]);

  useEffect(() => {
    setTimeout(() => {
      setShowToast(true);
    }, 10);
  }, []);

  if (open) {
    return (
      <ToastContent id="toast-content">
        <div
          className={classNames(
            "fixed z-50 w-1/3 p-5 bg-white bottom-0 rounded-md shadow-lg opacity-0",
            {
              "text-red-500": error,
              "text-green-500": success,
              "opacity-100": showToast,
            }
          )}
          style={{
            right: 20,
            transition: `all .4s cubic-bezier(.3,0,0,1)`,
            transform: showToast && `translate(0, -20px)`,
          }}
        >
          <div className="flex justify-between">
            {children}
            {showCloseIcon && (
              <div onClick={() => onCloseToast()}>
                <XIcon />
              </div>
            )}
          </div>
        </div>
      </ToastContent>
    );
  } else {
    return null;
  }
};

Toast.propTypes = {
  content: PropTypes.element,
  position: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
};

export default Toast;
