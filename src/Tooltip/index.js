import PropTypes from "prop-types";
import tw, { styled, css } from "twin.macro";
import { keyframes } from "@emotion/react";
import * as HoverCard from "@radix-ui/react-hover-card";

const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  to {
    opacity: 1
  }`;
const fadeOut = keyframes`
  0% {
    opacity: 1
  }
  to {
    opacity: 0
  }`;


const HoverCardContent = styled(HoverCard.Content)(() => [
  tw`py-3 px-4 bg-foreground text-white text-sm rounded`], css`
  max-width: 24em;
  &[data-state='open'] {
    animation: ${fadeIn} .2s ease-out forwards;
  }
  &[data-state='closed'] {
    animation: ${fadeOut} .1s ease-out forwards;
  }
  `
);
const HoverCardTrigger = styled(HoverCard.Trigger)(() => [
  tw`inline-block`], css`width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  display: inline-block;`
);

const Tooltip = ({ children, text, placement, className, hideArrow }) => {
  return (
    <HoverCard.Root openDelay={0} closeDelay={200}>
      <HoverCardTrigger className={className}>
        {children}
      </HoverCardTrigger>

      <HoverCardContent
        side={placement}
        onClick={(e) => e.stopPropagation()}
      >
        {text}
        {!hideArrow && <HoverCard.Arrow offset={20} />}
      </HoverCardContent>
    </HoverCard.Root>
  );
};

Tooltip.defaultProps = {
  placement: "top",
  hideArrow: false
};

Tooltip.propTypes = {
  placement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  hideArrow: PropTypes.bool
};

export default Tooltip;
