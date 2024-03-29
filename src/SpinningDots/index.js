/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const SpinningDots = ({ className, variant, css }) => {
  const StyledIcon = styled.i(() => [
    tw`animate-pulse h-0 w-0 rounded-full border-width[3px]`,
    variant === "default" && tw`text-accent-six`,
    variant === "light" && tw`text-accent-three`,
    variant === "dark" && tw`text-accent-eight`,
  ]);

  return (
    <div
      className={className}
      css={[tw`inline p-0 h-auto w-full text-center`, ...css]}
    >
      <span tw="inline-flex relative align-middle h-2 text-center opacity-50 w-10">
        <div tw="flex w-full justify-around">
          <StyledIcon style={{ animationDelay: "-.3s" }} />
          <StyledIcon style={{ animationDelay: "-.15s" }} />
          <StyledIcon />
        </div>
      </span>
    </div>
  );
};

SpinningDots.propTypes = {
  className: PropTypes.string,
  css: PropTypes.array,
  variant: PropTypes.oneOf(["default", "inherit", "light", "dark"]),
};

SpinningDots.defaultProps = {
  variant: "default",
  css: []
};

export default SpinningDots;
