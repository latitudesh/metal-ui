import React, { useState, useEffect, useRef, useCallback } from "react";
import fetch from "isomorphic-unfetch";
import PropTypes from "prop-types";
import cn from "classnames";

import Button from "../Button";
import ClickOutside from "../../util/ClickOutside";
import Input from "../Input";
import Textarea from "../Textarea";

const EMOJIS = new Map([
  ["🤩", "f929"],
  ["🙂", "f600"],
  ["😕", "f615"],
  ["😭", "f62d"],
]);

// gets the emoji from the code
let EMOJI_CODES = null;
function getEmoji(code) {
  if (code === null) return code;

  if (EMOJI_CODES === null) {
    EMOJI_CODES = new Map([...EMOJIS].map(([k, v]) => [v, k]));
  }
  return EMOJI_CODES.get(code);
}

const FeedbackInput = ({ dryRun, className, open, email, url, ...props }) => {
  const [emoji, setEmoji] = useState(null);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emojiShown, setEmojiShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [emailValue, setEmailValue] = useState(null);
  const [inputFocused, setInputFocused] = useState(null);
  const [value, setValue] = useState(null);
  const textAreaRef = useRef();
  const emailInputRef = useRef();
  const containerRef = useRef();

  const onErrorDismiss = useCallback(() => {
    setErrorMessage(null);
  }, []);

  const onSuccessDismiss = useCallback(() => {
    setSuccess(false);
  }, []);

  const handleClickOutside = useCallback(() => {
    setFocused(false);
    onErrorDismiss();
    onSuccessDismiss();

    if (textAreaRef.current) {
      textAreaRef.current.value = "";
    }

    if (emailInputRef.current) {
      emailInputRef.current.value = "";
    }
  }, [onErrorDismiss, onSuccessDismiss]);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      containerRef.current.focus();

      if (value.trim() === "") {
        setErrorMessage("Your feedback can't be empty");
        return;
      }

      setLoading(true);

      if (dryRun) {
        setLoading(false);
        setSuccess(true);
        setValue("");
        return;
      }

      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          url: window.location.toString(),
          note: textAreaRef.current.value,
          email: emailValue || "",
          emotion: getEmoji(emoji)
        }),
        throwOnHTTPError: true,
      })
        .then(() => {
          // Reset the textarea value on success
          setLoading(false);
          setSuccess(true);
          setValue("");
        })
        .catch((err) => {
          setLoading(false);
          setErrorMessage(err.message);
        });
    },
    [dryRun, emoji, value, emailValue]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        handleClickOutside();
        // we still need to make the container's DOM focused programmatically
        // to keep the current tab position
        if (containerRef.current) {
          containerRef.current.focus();
        }
      } else if (e.key === "Enter" && e.metaKey) {
        onSubmit(e);
      }
    },
    [handleClickOutside, onSubmit]
  );

  useEffect(() => {
    // Inputs were hidden if we were showing an error message and
    // now we hide it
    if (focused && inputFocused.current && errorMessage === null) {
      inputFocused.current.focus({ preventScroll: true });
    }
  }, [errorMessage, focused, inputFocused]);

  useEffect(() => {
    if (focused) {
      if (textAreaRef && textAreaRef.current) {
        textAreaRef.current.value = value;
      }

      if (emailInputRef && emailInputRef.current) {
        emailInputRef.current.value = emailValue;
      }

      window.addEventListener("keydown", onKeyDown);
    } else if (!focused && inputFocused && inputFocused.current) {
      inputFocused.current.blur();

      // Remove value visibly from textarea while it's unfocused
      textAreaRef.current.value = "";

      if (email) {
        emailInputRef.current.value = "";
      }

      window.removeEventListener("keydown", onKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [
    focused,
    inputFocused,
    handleClickOutside,
    emailValue,
    value,
    email,
    onSubmit,
    onKeyDown,
  ]);

  const focusEmailInput = useCallback(() => {
    if (inputFocused !== emailInputRef) {
      setInputFocused(emailInputRef);
      emailInputRef.current.focus({ preventScroll: true });
    }
  }, [inputFocused]);

  const focusTextArea = useCallback(() => {
    if (inputFocused !== textAreaRef) {
      setInputFocused(textAreaRef);
      textAreaRef.current.focus({ preventScroll: true });
    }
  }, [inputFocused]);

  const onFocus = useCallback(() => {
    if (email && emailInputRef.current && !focused) {
      focusEmailInput();
    } else if (textAreaRef.current && !focused) {
      focusTextArea();
    }

    setFocused(true);
  }, [
    email,
    emailInputRef,
    textAreaRef,
    focused,
    focusEmailInput,
    focusTextArea,
  ]);

  const onEmojiShown = useCallback(() => {
    setEmojiShown(true);
  }, []);

  const onEmojiHidden = useCallback(() => {
    setEmojiShown(false);
  }, []);

  const onEmojiSelect = useCallback((selectedEmoji) => {
    setEmoji(selectedEmoji);
  }, []);

  const handleChange = useCallback(
    (e) => {
      if (focused) {
        setValue(e);
      }
    },
    [focused]
  );

  const handleEmailChange = useCallback(
    (e) => {
      if (focused) {
        setEmailValue(e);
      }
    },
    [focused]
  );

  const eventListeners = useRef();
  eventListeners.current = {
    focus: onFocus,
    blur:handleClickOutside
  };

  useEffect(() => {
    if (!containerRef || !containerRef.current) return;

    let isFocusedInside = false;
    let lastState = false;
    const checkFinalState = () => {
      setTimeout(() => {
        if (isFocusedInside !== lastState) {
          if (isFocusedInside) {
            eventListeners.current.focus();
          } else {
            eventListeners.current.blur();
          }
          lastState = isFocusedInside;
        }
      }, 0);
    };

    // when hitting tab, there might be 2 things happening:
    //   1. an element inside is focused
    //   2. an element inside is unfocused
    // and they can happen in any order inside one tick:
    //   1 -> needs to stay open (outside -> inside)
    //   2 -> needs to be closed (inside -> outside)
    //   2 -> 1 needs to stay open (inside -> inside)
    const focusIn = () => {
      isFocusedInside = true;
      checkFinalState();
    };
    const blurIn = () => {
      isFocusedInside = false;
      checkFinalState();
    };

    // we add these 2 events manually because react doesn't yet support them as props
    containerRef.current.addEventListener("focusout", blurIn);
    containerRef.current.addEventListener("focusin", focusIn);
    return () => {
      containerRef.current.addEventListener("focusout", blurIn);
      containerRef.current.removeEventListener("focusin", focusIn);
    };
  }, []);

  return (
    <ClickOutside
      active={!focused}
      onClick={handleClickOutside}
      render={({ innerRef }) => (
        <div
          ref={(node) => {
            containerRef.current = node;
            innerRef(node);
          }}
          title="Share any feedback about our products and services"
          onClick={onFocus}
          tabIndex={0}
          className={cn(
            "geist-feedback-input hover:placeholder-black focus:placeholder-black active:placeholder-black p-0 w-24 h-12 relative mr-4 inline-block antialiased focus:outline-0 active:outline-0",
            {
              focused: focused || open,
              error: errorMessage,
              loading: loading,
              success: success,
              "email h-16": email,
            },
            className
          )}
          {...props}
        >
          <form
            className={cn(
              "feedback-wrapper appearance-none border-0 bg-white border border-gray-300 flex leading-6 text-sm rounded w-24 h-12 resize-none z-50 outline-none text-black flex-col justify-start overflow-hidden relative transition-all ease-in-out hover:border-black focus:border-black active:border-black",
              {
                "focused w-64 h-64 p-4 border-none border-white shadow-lg bg-white transition-all ease-in-out":
                  focused || open,
              }
            )}
            onSubmit={onSubmit}
          >
            <div
              className={cn(
                "placeholder flex absolute -top-1 -left-1 items-center justify-center w-24 h-12 border border-transparent flex-shrink-0 bg-white text-gray-600 transition-opacity duration-100 ease-out cursor-text",
                {
                  "opacity-0 pointer-events-none top-0 left-0 text-gray-300 transition-opacity duration-75 ease-linear": focused,
                }
              )}
            >
              Feedback
            </div>
            {!errorMessage && !success && (
              <div
                className={cn(
                  "input-wrapper opacity-0 transition-opacity duration-100 ease relative h-32",
                  {
                    "opacity-100": focused,
                  }
                )}
              >
                {email && (
                  <div
                    className={
                      "input mb-2 placeholder-gray-300 transition duration-100 ease-in-out"
                    }
                  >
                    <label className="m-0 block font-medium text-sm uppercase mt-0 mb-4 text-gray-300">
                      Email
                    </label>
                    <Input
                      id="feedback-input"
                      ref={(ref) => (emailInputRef.current = ref)}
                      onFocus={() => setInputFocused(emailInputRef)}
                      type="email"
                      placeholder="Your email address..."
                      width="100%"
                      disabled={loading === true || errorMessage != null}
                      onChange={handleEmailChange}
                    />
                  </div>
                )}

                <div className={"input"}>
                  <label>Feedback</label>
                  <Textarea
                    id="feedback-text"
                    ref={(ref) => (textAreaRef.current = ref)}
                    placeholder="Your feedback..."
                    width="100%"
                    onFocus={() => setInputFocused(textAreaRef)}
                    onChange={handleChange}
                    aria-label="Feedback input"
                    disabled={loading === true || errorMessage != null}
                    // Disable the Grammarly extension on this textarea
                    data-gramm-editor="false"
                  />
                </div>
              </div>
            )}

            {errorMessage != null && (
              <div
                className={
                  "error-message z-50 absolute left-0 top-0 w-24 text-sm h-full flex items-center justify-center text-center p-16 flex-col"
                }
              >
                <span>{errorMessage}</span>
                <Button
                  medium
                  onClick={(e) => {
                    e.preventDefault();
                    onErrorDismiss();
                  }}
                  autoFocus
                >
                  GO BACK
                </Button>
              </div>
            )}

            {success && (
              <div
                className={
                  "success-message z-50 absolute left-0 top-0 w-24 text-sm h-full flex items-center justify-center text-center p-16 flex-col"
                }
              >
                <p>Your feedback has been received!</p>
                <p>Thank you for your help.</p>
              </div>
            )}

            {!success && !errorMessage && (
              <div
                className={cn("controls", {
                  "focused opacity-100 flex mt-20": focused,
                })}
              >
                <span className={"emojis w-3/5"}>
                  <EmojiSelector
                    onShow={onEmojiShown}
                    onHide={onEmojiHidden}
                    onEmojiSelect={onEmojiSelect}
                    loading={loading}
                  />
                </span>
                <span
                  className={cn(
                    "buttons flex-1 text-right transition-opacity duration-200 ease ml-auto",
                    {
                      hidden: emojiShown,
                    }
                  )}
                >
                  <Button loading={loading} width={60} label="Send" onClick={onSubmit} />
                </span>
              </div>
            )}
          </form>
        </div>
      )}
    />
  );
};

FeedbackInput.propTypes = {
  dryRun: PropTypes.bool,
  open: PropTypes.bool,
  className: PropTypes.string,
  url: PropTypes.string,
};

const EmojiSelector = ({ onEmojiSelect, loading }) => {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    if (onEmojiSelect) {
      onEmojiSelect(current);
    }
  }, [current, onEmojiSelect]);

  const onSelect = (emoji) => {
    if (emoji !== current) {
      setCurrent(emoji);
    }
  };

  return (
    <div
      className={cn("geist-emoji-selector", {
        loading,
      })}
    >
      {Array.from(EMOJIS.values()).map((emoji) => (
        <button
          type="button"
          className={cn("option", {
            active: emoji === current,
          })}
          key={emoji}
          onClick={() => onSelect(emoji)}
        >
          <span className={cn("inner")}>
            <Emoji code={emoji} />
          </span>
        </button>
      ))}
    </div>
  );
};

const Emoji = React.memo(({ code }) => (
  <img
    decoding="async"
    width={20}
    height={20}
    src={`https://assets.vercel.com/twemoji/1${code}.svg`}
    alt="emoji"
  />
));

export default FeedbackInput;
