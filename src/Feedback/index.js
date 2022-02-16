/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import tw from "twin.macro";

import Button from "../Button";
import Input from "../Input";
import Textarea from "../Textarea";
import Text from "../Text";

import f929 from "./svgs/f929.js";
import f600 from "./svgs/f600.js";
import f615 from "./svgs/f615.js";
import f62d from "./svgs/f62d.js";
import { useRadioGroupState } from "@react-stately/radio";
import { useRadio, useRadioGroup } from "@react-aria/radio";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useFocusRing } from "@react-aria/focus";
import FeedbackButton from "./FeedbackButton";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { useClickAway } from "react-use";

const EMOJIS = [
  { code: "f929", char: "🤩", svg: f929, label: "very-happy" },
  { code: "f600", char: "🙂", svg: f600, label: "happy" },
  { code: "f615", char: "😕", svg: f615, label: "meh" },
  { code: "f62d", char: "😭", svg: f62d, label: "unhappy" },
];

let RadioContext = React.createContext(null);

// https://react-spectrum.adobe.com/react-aria/useRadioGroup.html#example
function EmojiRadioGroup(props) {
  let { children, label } = props;
  let state = props.emojiState;
  let { radioGroupProps, labelProps } = useRadioGroup(props, state);

  return (
    <div {...radioGroupProps} css={[tw`flex space-x-2`]}>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </div>
  );
}

function EmojiRadio(props) {
  let { children } = props;
  let state = React.useContext(RadioContext);
  let ref = React.useRef(null);
  let { inputProps } = useRadio(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();
  const selected = state.selectedValue === props.value;

  return (
    <label
      onFocus={props.onFocus}
      css={[
        tw`inline-flex bg-transparent p-0 m-0 transition-all duration-100 ease-in-out border border-border transform cursor-pointer text-center rounded-full`,
        tw`hover:scale-105 active:scale-105 hover:bg-white active:bg-white outline-none focus:outline-none `,
        selected && tw`scale-110 border bg-white border-warning-light`,
        isFocusVisible && tw`ring-2`,
      ]}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <div>
        <span
          tw={"flex justify-center items-center"}
          style={{ width: 32, height: 32, borderRadius: "50%" }}
        >
          {children}
        </span>
      </div>
    </label>
  );
}

const Feedback = ({
  url,
  email,
  enableFeedbackText = true,
  enableEmoji = true,
  side = "bottom",
  sideOffset = 5,
  align = "start",
  emailProps,
  feedbackTextProps,
  submitButtonProps,
  dryRun = false,
  children,
  ...props
}) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const enableEmail = !email;
  const emailInitialValue = email ? email : "";
  const [emailValue, setEmailValue] = useState(emailInitialValue);
  const [feedbackText, setFeedbackText] = useState("");
  const emojiState = useRadioGroupState(props);
  const formRef = useRef();

  const combinedEmailProps = {
    required: true,
    label: "Email",
    autoFocus: true,
    placeholder: "Your email address...",
    ...emailProps,
  };

  const combinedFeedbackTextProps = {
    label: "Feedback",
    placeholder: "Your feedback...",
    required: true,
    rows: 3,
    "aria-label": "Feedback input",
    // Disable the Grammarly extension on this textarea
    "data-gramm-editor": false,
    ...feedbackTextProps,
  };

  const combinedSubmitButtonProps = {
    label: "Send",
    variant: "default",
    ...submitButtonProps,
  };

  const onErrorDismiss = useCallback(() => {
    setErrorMessage("");
  }, []);

  const onSuccessDismiss = useCallback(() => {
    setSuccess(false);
  }, []);

  const closeFeedbackForm = useCallback(() => {
    setOpen(false);
    onErrorDismiss();
    onSuccessDismiss();
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
      emotion: emojiState.selectedValue,
    };
    Promise.resolve()
      .then(() => {
        if (dryRun) {
          return;
        }
        return fetch(url, {
          method: "POST",
          body: JSON.stringify(body),
        });
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Sorry, we couldn't send your feedback. Status: ${response.status}`
          );
        }
        return response.json();
      })
      .then(() => {
        // Reset the textarea feedbackText on success
        setLoading(false);
        setSuccess(true);
        setEmailValue(emailInitialValue);
        setFeedbackText("");
      })
      .catch((err) => {
        setLoading(false);
        setErrorMessage(err.message);
      });
  };

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
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
  }, [onKeyDown]);

  useClickAway(formRef, closeFeedbackForm);

  const disableInputs = Boolean(loading || errorMessage);

  const handleTriggerButton = (tooglePopover) => {
    //if user have errorMessage or a success and are closing the popover on buttonTrigger clear error and success
    if ((errorMessage || success) && !tooglePopover) {
      closeFeedbackForm();
    }
    setOpen(tooglePopover);
  };

  const TriggerButton = React.forwardRef((_, ref) =>
    children ? (
      children({ open, setOpen: handleTriggerButton, ref: ref })
    ) : (
      <FeedbackButton open={open} setOpen={handleTriggerButton} ref={ref} />
    )
  );

  return (
    <div
      title="Share any feedback about our products and services"
      css={[
        tw`p-0 relative inline-block antialiased focus:outline-none active:outline-none`,
        errorMessage && tw`text-transparent`,
      ]}
      aria-expanded={open}
      data-testid="container-popover"
      {...props}
    >
      <PopoverPrimitive.Root onOpenChange={closeFeedbackForm} open={open}>
        <PopoverPrimitive.Trigger asChild>
          <TriggerButton />
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Content
          sideOffset={sideOffset}
          side={side}
          align={align}
        >
          <form
            ref={formRef}
            css={[
              tw`h-auto border-white appearance-none border-0 flex leading-6 text-sm rounded shadow-lg bg-white `,
              tw`resize-none z-50 text-foreground flex-col justify-start relative`,
              tw`hover:border-foreground focus:border-foreground active:border-foreground`,
            ]}
            style={{ width: "22rem" }}
            onSubmit={onSubmit}
            data-testid="form"
          >
            {!errorMessage && !success && (
              <div css={[tw`p-4 relative`]}>
                {enableEmail && (
                  <div tw={"mb-2"}>
                    <Input
                      id="feedback-email"
                      type="email"
                      disabled={disableInputs}
                      onChange={setEmailValue}
                      value={emailValue}
                      {...combinedEmailProps}
                    />
                  </div>
                )}

                {enableFeedbackText && (
                  <div className={"input"}>
                    <Textarea
                      id="feedback-text"
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e)}
                      disabled={disableInputs}
                      // Disable the Grammarly extension on this textarea
                      textareaClassName={cn("feedback-input", {
                        "text-brand-gray": loading,
                      })}
                      {...combinedFeedbackTextProps}
                    />
                  </div>
                )}
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
                  tw`w-full h-16 p-4 flex justify-end items-center gap-4 bg-background border-t border-border pointer-events-auto`,
                ]}
              >
                {enableEmoji && (
                  <span className={"emojis"}>
                    <EmojiRadioGroup
                      label="Select an emoji"
                      emojiState={emojiState}
                    >
                      {EMOJIS.map((emoji) => {
                        const SvgComponent = emoji.svg;
                        return (
                          <EmojiRadio
                            key={emoji.char}
                            value={emoji.char}
                            label={emoji.label}
                          >
                            <SvgComponent css={[tw`w-5 h-5`]} />
                          </EmojiRadio>
                        );
                      })}
                    </EmojiRadioGroup>
                  </span>
                )}
                <span tw={"ml-auto"}>
                  <Button
                    disabled={loading}
                    data-testid={"submit-button"}
                    type="submit"
                    {...combinedSubmitButtonProps}
                  />
                </span>
              </div>
            )}
          </form>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Root>
    </div>
  );
};

Feedback.propTypes = {
  /**
   Show text area to collect feedback text
   */
  enableFeedbackText: PropTypes.bool,
  /**
   Show emoji selection buttons
   */
  enableEmoji: PropTypes.bool,
  /**
   Don't make the http request
   */
  dryRun: PropTypes.bool,
  /**
   URL to make the POST request
   */
  url: PropTypes.string,
  /**
   Don't show the email input field and use the specified email instead
   */
  email: PropTypes.string,
  /**
   Props to pass on to the email input field
   */
  emailProps: PropTypes.any,
  /**
   Props to pass on to the feedback text area
   */
  feedbackTextProps: PropTypes.any,
  /**
   Props to pass on to the submit button
   */
  submitButtonProps: PropTypes.any,
  /**
   The preferred side of the anchor to render against when open.
  */
  side: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  /**
   The distance in pixels from the anchor.
  */
  sideOffset: PropTypes.number,
  /**
    The preferred alignment against the anchor. May change when collisions occur.
  */
  align: PropTypes.oneOf(["start", "center", "end"]),
};

export default Feedback;
