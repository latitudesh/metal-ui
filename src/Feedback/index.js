import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Button from "../Button";
import Input from "../Input";
import Textarea from "../Textarea";
import Text from "../Typography/Text";

import useClickAway from 'react-use/lib/useClickAway';

// TODO rely on browser support for emojis
import f929 from './svgs/f929.svg'
import f600 from './svgs/f600.svg'
import f615 from './svgs/f615.svg'
import f62d from './svgs/f62d.svg'

const EMOJIS = [
    { code: "f929", char: "🤩", svg: f929},
    { code: "f600", char: "🙂", svg: f600},
    { code: "f615", char: "😕", svg: f615},
    { code: "f62d", char: "😭", svg: f62d},
];

const FeedbackInput = ({ dryRun, className, forceOpen, email, url, ...props }) => {
  const [emoji, setEmoji] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const textAreaRef = useRef();
  const emailInputRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
      if (!open) return;
      emailInputRef?.current?.focus();
  }, [open, emailInputRef])

  const onErrorDismiss = useCallback(() => {
    setErrorMessage('');
  }, []);

  const onSuccessDismiss = useCallback(() => {
    setSuccess(false);
  }, []);

  const handleClickOutside = useCallback(() => {
    setOpen(false);
    onErrorDismiss();
    onSuccessDismiss();

    setFeedbackText('')
    setEmailValue('')
  }, [onErrorDismiss, onSuccessDismiss]);

  const onSubmit = (event) => {
      event.preventDefault();
      containerRef.current.focus();

      if (feedbackText.trim() === "") {
        setErrorMessage("Your feedback can't be empty");
        return;
      }

      setLoading(true);

      if (dryRun) {
        setLoading(false);
        setSuccess(true);
        setFeedbackText("");
        return;
      }

      const body = {
          url: url,
          note: feedbackText,
          email: emailValue || "",
          emotion: emoji
        }
        fetch(url, {
              method: "POST",
              body: JSON.stringify(body),
              throwOnHTTPError: true,
          })
        .then(() => {
          // Reset the textarea feedbackText on success
          setLoading(false);
          setSuccess(true);
          setFeedbackText("");
        })
        .catch((err) => {
          setLoading(false);
          setErrorMessage(err.message);
        });
    };

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        handleClickOutside();
      } else if (e.key === "Enter" && e.metaKey) {
        onSubmit(e);
      }
    },
    [handleClickOutside, onSubmit]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [
      onSubmit
  ]);

  const onEmojiSelect = useCallback((selectedEmoji) => {
    setEmoji(selectedEmoji);
  }, []);

  useClickAway(containerRef, handleClickOutside);
  return (
        <div
          ref={containerRef}
          title="Share any feedback about our products and services"
          tabIndex={0}
          onClick={() => setOpen(true)}
          className={cn(
            "feedback-input p-0 w-24 relative inline-block antialiased focus:outline-0 active:outline-0",
            {
              "h-8": !open || !forceOpen,
              focused: open || forceOpen,
              "error text-transparent select-none": errorMessage,
              loading: loading,
              "success text-transparent select-none h-32": success,
              email: email,
            },
            className
          )}
          {...props}
        >
          <form
            className={cn(
              "feedback-wrapper appearance-none border-0 bg-white border border-gray-300 flex leading-6 text-sm rounded w-24 h-8 resize-none z-50 outline-none text-black flex-col justify-start overflow-hidden relative transition-all ease-in-out hover:border-black focus:border-black active:border-black focus:outline-none active:outline-none",
              {
                "focused w-72 h-auto min-h-full border-none border-white shadow-lg bg-white transition-all ease-in-out":
                  open || forceOpen,
              }
            )}
            onSubmit={onSubmit}
          >
            <div
              className={cn(
                "placeholder flex absolute -top-1 -left-1 items-center justify-center w-24 h-8 border border-transparent flex-shrink-0 bg-white text-gray-600 transition-opacity duration-50 ease-out cursor-text",
                {
                  "opacity-0 pointer-events-none top-0 left-0 text-gray-300 transition-opacity duration-75 ease-linear": open,
                }
              )}
              style={{ marginTop: "-1px", marginLeft: "-1px" }}
              role={'button'}
            >
              Feedback
            </div>
            {!errorMessage && !success && (
              <div
                className={cn(
                  "input-wrapper p-4 opacity-0 transition-opacity duration-50 ease relative h-32",
                  {
                    "opacity-100": open,
                    hidden: !open,
                  }
                )}
              >
                {email && (
                  <div
                    className={
                      "input mb-2 placeholder-gray-300 transition duration-100 ease-in-out"
                    }
                  >
                    <Input
                      label="Email"
                      id="feedback-input"
                      ref={emailInputRef}
                      autoFocus={true}
                      type="email"
                      placeholder="Your email address..."
                      width="100%"
                      disabled={loading === true || errorMessage != ''}
                      onChange={setEmailValue}
                      value={emailValue}
                    />
                  </div>
                )}

                <div className={"input"}>
                  <Textarea
                    id="feedback-text"
                    label="Feedback"
                    ref={textAreaRef}
                    placeholder="Your feedback..."
                    width="100%"
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e)}
                    aria-label="Feedback input"
                    disabled={loading === true || errorMessage != ''}
                    // Disable the Grammarly extension on this textarea
                    data-gramm-editor="false"
                    textareaClassName={cn("feedback-input", {
                      "text-gray-900": loading,
                    })}
                  />
                </div>
              </div>
            )}

            {errorMessage && (
              <div
                className={
                  "flex flex-col items-center justify-center p-4 success-message text-center z-50"
                }
              >
                <Text
                  is="p"
                  small
                  color="text-red-600"
                  style={{ marginBottom: "8px" }}
                >
                  {errorMessage}
                </Text>
                <Button
                  type="minimal"
                  onClick={(e) => {
                    e.preventDefault();
                    onErrorDismiss();
                  }}
                  autoFocus
                  label="Go back"
                />
              </div>
            )}

            {success && (
              <div
                className={
                  "flex flex-col items-center justify-center p-4 success-message text-center z-50"
                }
              >
                <Text small is="p">
                  Your feedback has been received!
                </Text>
                <Text small is="p">
                  Thank you for your help.
                </Text>
              </div>
            )}

            {!success && !errorMessage && (
              <div
                className={cn(
                  "controls w-full h-16 p-4 flex items-center bg-gray-100 border-t border-gray-200 opacity-0 transition-opacity duration-200 ease",
                  {
                    "focused opacity-100 mt-20 pointer-events-auto": open,
                    "hidden pointer-events-none": !open,
                  }
                )}
                data-testid={'form'}
              >
                <span className={"emojis"} style={{ width: '160px' }}>
                  <EmojiSelector
                    selectedEmoji={emoji}
                    onEmojiSelect={onEmojiSelect}
                    loading={loading}
                  />
                </span>
                <span
                  className={cn(
                    "buttons flex-1 text-right transition-opacity duration-200 ease ml-auto",
                  )}
                >
                  <Button
                    loading={loading}
                    width={60}
                    label="Send"
                    onClick={onSubmit}
                    data-testid={'submit-button'}
                  />
                </span>
              </div>
            )}
          </form>
        </div>
  );
};

FeedbackInput.propTypes = {
  dryRun: PropTypes.bool,
  forceOpen: PropTypes.bool,
  className: PropTypes.string,
  url: PropTypes.string,
};

const EmojiSelector = ({ selectedEmoji, onEmojiSelect, loading }) => {
  return (
    <div
      className={cn("emoji-selector flex space-x-2", {
        "loading cursor-default": loading,
      })}
    >
      {EMOJIS.map((emoji) => (
        <button
          type="button"
          className={cn(
            "option inline-flex outline-none bg-transparent p-0 m-0 transition-all duration-100 ease-in-out border border-gray-200 active:outline-none transform hover:scale-105 active:scale-105 hover:bg-white active:bg-white cursor-pointer text-center",
            {
              "active scale-110 border bg-white border-orange-400": emoji.char === selectedEmoji,
              "cursor-default": loading,
            }
          )}
          key={emoji.code}
          onClick={() => onEmojiSelect(emoji.char)}
          style={{ borderRadius: "50%" }}
        >
          <span
            className={cn("inner flex justify-center items-center")}
            style={{ width: 32, height: 32, borderRadius: '50%' }}
          >
            <Emoji svg={emoji.svg} />
          </span>
        </button>
      ))}
    </div>
  );
};

const Emoji = React.memo(({ svg }) => (
  <img
    decoding="async"
    width={20}
    height={20}
    src={svg}
    alt="emoji"
  />
));

export default FeedbackInput;
