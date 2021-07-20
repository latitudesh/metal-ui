/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import tw from 'twin.macro';

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
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [emoji, setEmoji] = useState(null);
  const containerRef = useRef();
  const emailRef = useRef();
  const toggleButtonRef = useRef();
  const [focusedElement, setFocusedElement] = useState(null);

  useEffect(() => {
      if (open) {
          if (focusedElement) {
              // Preserve focus an subsequent uses
              focusedElement?.focus();
          } else {
              // Focus on email on first use
              // We need this because we aren't using the autoFocus attribute
              emailRef.current?.focus();
          }
      } else {
          toggleButtonRef.current?.focus();
      }
  }, [open, focusedElement])

  const onErrorDismiss = useCallback(() => {
    setErrorMessage('');
  }, []);

  const onSuccessDismiss = useCallback(() => {
    setSuccess(false);
  }, []);

  const closeFeedbackForm = useCallback(() => {
    setOpen(false);
    onErrorDismiss();
    onSuccessDismiss();

    setFeedbackText('')
    setEmailValue('')
  }, [onErrorDismiss, onSuccessDismiss]);

  const onSubmit = (event) => {
      event.preventDefault();

      if (feedbackText.trim() === "") {
        setErrorMessage("Your feedback can't be empty");
        return;
      }

      setLoading(true);

      const body = {
          url: url,
          note: feedbackText,
          email: emailValue,
          emotion: emoji
        }
      Promise.resolve()
          .then(() => {
              if (dryRun) {
                  return;
              }
              return fetch(url, {
                  method: "POST",
                  body: JSON.stringify(body),
                  throwOnHTTPError: true,
              })
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
        closeFeedbackForm();
      } else if (e.key === "Enter" && e.metaKey) {
        onSubmit(e);
      }
    },
    [closeFeedbackForm, onSubmit]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [
      onKeyDown
  ]);

  const onEmojiSelect = useCallback((selectedEmoji) => {
    setEmoji(selectedEmoji);
  }, []);

  const disableInputs = Boolean(loading || errorMessage);
  useClickAway(containerRef, closeFeedbackForm);
  return (
        <div
          ref={containerRef}
          title="Share any feedback about our products and services"
          css={[
            tw`p-0 w-24 relative inline-block antialiased focus:outline-none active:outline-none`,
              (!open || !forceOpen) && tw`h-8`,
              errorMessage && tw`text-transparent`,
          ]}
          {...props}
        >
          <form
            css={[
            tw`appearance-none border-0 bg-white border border-brand-gray flex leading-6 text-sm rounded w-24 h-8`,
            tw`resize-none z-50 text-foreground flex-col justify-start overflow-hidden relative transition-all ease-in-out`,
            tw`hover:border-foreground focus:border-foreground active:border-foreground`,
            (open || forceOpen) && tw`w-72 h-auto min-h-full border-none border-white shadow-lg bg-white transition-all ease-in-out`,
            ]}
            onSubmit={onSubmit}
          >
            <button
              css={[
                tw`flex absolute items-center justify-center w-24 h-8 border border-transparent `,
                  tw`flex-shrink-0 bg-white text-brand-gray transition-opacity duration-75 ease-out cursor-text`,
                  open && tw`opacity-0 pointer-events-none text-brand-gray transition-opacity duration-75 ease-linear`
              ]}
              role={'button'}
              ref={toggleButtonRef}
              onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
              }}
            >
              Feedback
            </button>
            {!errorMessage && !success && (
              <div
                css={[
                  tw`p-4 opacity-0 transition-opacity duration-75 ease relative h-32`,
                open && tw`opacity-100`,
                !open && tw`hidden`,
                ]}
              >
                {email && (
                  <div
                    tw={
                      "mb-2 transition duration-100 ease-in-out"
                    }
                  >
                    <Input
                      label="Email"
                      ref={emailRef}
                      id="feedback-input"
                      autoFocus={true}
                      onFocus={(e) => setFocusedElement(e.target)}
                      type="email"
                      required
                      placeholder="Your email address..."
                      width="100%"
                      disabled={disableInputs}
                      onChange={setEmailValue}
                      value={emailValue}
                    />
                  </div>
                )}

                <div className={"input"}>
                  <Textarea
                    id="feedback-text"
                    label="Feedback"
                    placeholder="Your feedback..."
                    width="100%"
                    value={feedbackText}
                    required
                    onChange={(e) => setFeedbackText(e)}
                    onFocus={(e) => setFocusedElement(e.target)}
                    aria-label="Feedback input"
                    disabled={disableInputs}
                    // Disable the Grammarly extension on this textarea
                    data-gramm-editor="false"
                    textareaClassName={cn("feedback-input", {
                      "text-brand-gray": loading,
                    })}
                  />
                </div>
              </div>
            )}

            {errorMessage && (
              <div
                tw={
                  "flex flex-col items-center justify-center p-4 text-center z-50"
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
                tw={
                  "flex flex-col items-center justify-center p-4 text-center z-50"
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
                css={[
                  tw`w-full h-16 p-4 flex items-center gap-4 bg-brand-lightGray border-t border-brand-lightGray opacity-0 transition-opacity duration-200 ease`,
                open && tw`opacity-100 mt-20 pointer-events-auto`,
                        !open && tw`hidden pointer-events-none`
                ]}
                data-testid={'form'}
              >
                <span className={"emojis"} style={{ width: '160px' }}>
                  <EmojiSelector
                    selectedEmoji={emoji}
                    onEmojiSelect={onEmojiSelect}
                    loading={loading}
                    onFocus={(e) => setFocusedElement(e.target)}
                  />
                </span>
                <span
                  tw={
                    "flex-1 text-right transition-opacity duration-200 ease ml-auto"
                  }
                >
                  <Button
                    disabled={loading}
                    width={60}
                    label="Send"
                    onFocus={(e) => setFocusedElement(e.target)}
                    data-testid={'submit-button'}
                    type={'submit'}
                    variant={'brand-p'}
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

const EmojiSelector = ({ selectedEmoji, onEmojiSelect, loading, onFocus }) => {
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
            "option inline-flex bg-transparent p-0 m-0 transition-all duration-100 ease-in-out border border-brand-gray transform cursor-pointer text-center",
              "hover:scale-105 active:scale-105 hover:bg-white active:bg-white",
              "outline-none focus:outline-none focus:shadow-outline-blue",
            {
              "active scale-110 border bg-white border-orange-400": emoji.char === selectedEmoji,
              "cursor-default": loading,
            }
          )}
          key={emoji.code}
          onFocus={onFocus}
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
