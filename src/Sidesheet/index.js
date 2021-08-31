import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Box from "../Box";

function XIcon() {
  return (
    <svg
      fill="none"
      className="text-accent-four"
      stroke="currentColor"
      viewBox="0 0 24 24"
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

const SidesheetContent = ({ id, children }) => {
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

const Sidesheet = ({
  title,
  children,
  className,
  action,
  content,
  width = 400,
  onClose,
  isShown = false,
}) => {
  const sideSheet = useRef();
  const portal = useRef();
  const [isOpened, setIsOpened] = useState(false);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    let transitionTimeout

    if (!isShown) {
      setTransition(false);
      transitionTimeout = setTimeout(() => setIsOpened(false), 300);
    } else {
      setIsOpened(true);
      transitionTimeout = setTimeout(() => setTransition(true), 100);
    }

    return () => clearTimeout(transitionTimeout)
  }, [isShown]);

  const closeTransition = () => {
    if (isOpened && transition) {
      onClose();
      setTransition(false);
      setTimeout(() => setIsOpened(false), 500);
    }
  };

  return (
    <div ref={sideSheet}>
      {children}
      {isOpened && (
        <SidesheetContent id="sidesheet">
          <div
            onClick={() => closeTransition()}
            className={classNames(
              "fixed z-50 inset-0 opacity-25 duration-200 delay-100 transition",
              {
                "bg-accent-eight": transition,
                "bg-transparent": !transition,
              }
            )}
          />
          <div
            ref={portal}
            style={{
              transition: `transform .2s cubic-bezier(.3,0,0,1)`,
              transform: transition
                ? `translateX(calc(100vw - ${width}px - 20px))`
                : `translateX(100vw)`,
              top: 0,
              bottom: 0,
              width: width,
              height: "calc(100% - 20px)",
            }}
            className={
              "fixed z-50 min-w-0 bg-white duration-300 delay-200 h-full flex flex-col shadow-xl m-2 rounded"
            }
          >
            <Box
              flex
              alignItems="center"
              className="relative border-b border-border rounded rounded-b-none"
            >
              <div className="text-foreground flex-auto truncate leading-6">
                {title}
              </div>
              <Box
                flex
                backgroundColor="transparent"
                className="cursor-pointer"
                noPadding
              >
                <div onClick={() => closeTransition()}>
                  <XIcon />
                </div>
              </Box>
            </Box>
            <Box
              flex
              flexDirection="col"
              className="sidesheet-content relative overflow-y-auto flex-1 rounded"
            >
              <Box noPadding flex flexDirection="col" className="overflow-visible">
                {content}
              </Box>
            </Box>
            {action && (
              <Box
                flex
                justifyContent="evenly"
                alignItems="center"
                className="sidesheet-action h-16 border-t border-border relative flex-initial rounded rounded-t-none"
              >
                {action}
              </Box>
            )}
          </div>
        </SidesheetContent>
      )}
    </div>
  );
};

Sidesheet.propTypes = {
  content: PropTypes.element,
  children: PropTypes.element,
  className: PropTypes.string,
  width: PropTypes.string,
  action: PropTypes.element,
  onClose: PropTypes.func,
  isShown: PropTypes.bool,
  title: PropTypes.string,
};

export default Sidesheet;
