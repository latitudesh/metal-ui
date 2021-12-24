/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import Text from "../Text";
import tw from "twin.macro";

function XIcon() {
  return (
    <svg
      fill="none"
      tw="text-accent-six"
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
  text,
  error,
  success,
  showCloseIcon,
  hide,
  dismissTime = 6000,
  onCloseToast,
}) => {
  const [open, setOpen] = useState(true);
  const [showToast, setShowToast] = useState(hide);

  const closeToast = () => {
    setShowToast(false);
    setOpen(false);
    if (onCloseToast) {
      onCloseToast();
    }
  };

  useEffect(() => {
    if (dismissTime) {
      const interval = setInterval(() => {
        closeToast();
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
          css={[
            tw`fixed z-50 w-1/4 max-w-full p-5 bg-white bottom-0 rounded-md shadow-xl opacity-0`,
            error && tw`text-white bg-error`,
            success && tw`text-white bg-success`,
            showToast && tw`opacity-100`,
          ]}
          style={{
            right: 20,
            transition: `all .4s cubic-bezier(.3,0,0,1)`,
            transform: showToast && `translate(0, -20px)`,
          }}
        >
          <div tw="flex justify-between items-center">
            <div tw="w-11/12">
              <Text small color={(success || error) && `text-white`}>
                {text}
              </Text>
            </div>
            {showCloseIcon && (
              <div onClick={() => closeToast()}>
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
  success: PropTypes.bool,
  showCloseIcon: PropTypes.bool,
  hide: PropTypes.bool,
  error: PropTypes.bool,
  text: PropTypes.string,
  dismissTime: PropTypes.number,
};

export default Toast;
