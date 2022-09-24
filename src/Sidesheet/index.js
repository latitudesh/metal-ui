import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import Box from "../Box";
import { useKeyPressEvent } from "react-use";
import tw from "twin.macro";

function XIcon() {
  return (
    <svg
      fill="none"
      tw="text-accent-four"
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
    let transitionTimeout;

    if (!isShown) {
      setTransition(false);
      transitionTimeout = setTimeout(() => setIsOpened(false), 300);
    } else {
      setIsOpened(true);
      transitionTimeout = setTimeout(() => setTransition(true), 100);
    }

    return () => clearTimeout(transitionTimeout);
  }, [isShown]);

  const closeTransition = () => {
    let timeout
    if (isOpened && transition) {
      onClose();
      setTransition(false);
      timeout = setTimeout(() => setIsOpened(false), 300);
    }
    return () => clearTimeout(timeout)
  };

  useKeyPressEvent("Escape", closeTransition);

  return (
    <div ref={sideSheet}>
      {children}
      {isOpened && (
        <SidesheetContent id="sidesheet">
            <div
              onClick={isOpened ?  () => closeTransition() : null}
              css={[
                tw`fixed z-50 inset-0 opacity-25 duration-200 delay-100 transition`,
                transition && tw`bg-accent-eight`,
                !transition && tw`bg-transparent`,
              ]}
            />
            <div
              ref={portal}
              style={{
                transition: "transform .2s cubic-bezier(.3,0,0,1)",
                transform: transition
                  ? `translateX(0)`
                  : "translateX(100%)",
                top: 0,
                bottom: 0,
                right:0,
                width: width,
                maxWidth: "calc(100vw - 20px)",
                height: "calc(100% - 20px)",
              }}
              tw="fixed z-50 min-w-0 bg-white duration-300 delay-200 h-full flex flex-col shadow-xl m-2 rounded"
            >
              <Box
                flex
                alignItems="center"
                tw="relative border-b border-border rounded rounded-b-none"
              >
                <div tw="text-foreground flex-auto truncate leading-6">
                  {title}
                </div>
                <Box
                  flex
                  backgroundColor="transparent"
                  className="cursor-pointer bg-transparent"
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
                overflow={"overflow-y-auto"}
                className="sidesheet-content relative flex-1 rounded px-3 py-3"
                noPadding
              >
                <Box
                  noPadding
                  flex
                  flexDirection="col"
                  overflow={"overflow-y-auto"}
                  className="overflow-visible px-3 py-3"
                >
                 <div tw="flex-shrink-0">{content}</div>
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
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  action: PropTypes.element,
  onClose: PropTypes.func,
  isShown: PropTypes.bool,
  title: PropTypes.string,
};

export default Sidesheet;
