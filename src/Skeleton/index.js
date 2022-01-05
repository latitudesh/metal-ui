/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import tw, { css, styled } from "twin.macro";
import { keyframes } from "@emotion/react";

const animation = keyframes`
  0% {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }`;

const StyledSkeleton = styled.span(({ width, height, vertical }) => [
  `
  display: flex;
  border-radius: 5px;
  background-image: linear-gradient(
    270deg,
    #fafafa,
    #eaeaea,
    #eaeaea,
    #fafafa
  );
  background-size: 400% 100%;
  width: ${Number(width) ? width + 'px' : width};
  min-height: ${Number(height) ? height + 'px' : height};
`,
]);

const Skeleton = ({ width, height, className, vertical }) => (
  <div
    className="skeleton"
    css={[vertical && tw`inline-flex items-end justify-between mr-2`]}
  >
    <StyledSkeleton
      className={className}
      width={width}
      height={height}
      vertical={vertical}
      css={[
        tw`flex-col`,
        css`
          animation: ${animation} 8s ease-in-out infinite;
        `,
      ]}
    />
  </div>
);

Skeleton.propTypes = {
  /**
   * Numbers will be treated as px while any other css units need to be provided as strings.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Numbers will be treated as px while any other css units need to be provided as strings.
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  /**
   * Vertical won't work with percentage widths
   */
  vertical: PropTypes.bool,
};

Skeleton.defaultProps = {
  width: 160,
  height: 24,
  vertical: false,
};

export default Skeleton;
