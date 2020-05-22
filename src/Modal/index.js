import React, { useState, useEffect, useRef, cloneElement } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const ModalContent = ({ id, children }) => {
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

const Modal = ({ content, children }) => {
  const modal = useRef();
  const portal = useRef();
  const [open, setOpen] = useState(false);

  const onOutSideClick = (event) => {
    if (
      modal.current.contains(event.target) ||
      (portal.current && portal.current.contains(event.target))
    ) {
      return;
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onOutSideClick);

    return () => {
      document.removeEventListener("mousedown", onOutSideClick);
    };
  }, []);

  return (
    <div ref={modal}>
      {cloneElement(children, { onClick: () => setOpen(!open) })}
      {open && (
        <ModalContent id="modal">
          <div
            ref={portal}
            className={
              "fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
            }
          >
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div
              className="bg-white rounded-sm px-4 px-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div>
                <div className="mx-auto flex items-center justify-center">
                  <div>Title</div>
                </div>
                <div className="mt-4 text-center">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Modal subtitle
                  </h3>
                  <div className="mt-2">
                    {content}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                Actions
              </div>
            </div>
          </div>
        </ModalContent>
      )}
    </div>
  );
};

Modal.propTypes = {
  content: PropTypes.element,
  children: PropTypes.element,
  className: PropTypes.string,
};

export default Modal;
