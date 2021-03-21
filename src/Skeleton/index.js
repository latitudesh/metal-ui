import React from "react";
import PropTypes from "prop-types";
import { css, styled } from "twin.macro";
import { keyframes } from "@emotion/react";

const animation = keyframes`
  0% {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }`;

const StyledSkeleton = styled.span(({ width, height }) => [
  `
  display: block;
  border-radius: 5px;
  background-image: linear-gradient(
    270deg,
    #fafafa,
    #eaeaea,
    #eaeaea,
    #fafafa
  );
  background-size: 400% 100%;
  width: ${width}px;
  min-height: ${height}px;
`,
]);

const Skeleton = ({ width, height, className }) => {
  return (
    <div className="skeleton">
      <StyledSkeleton
        className={className}
        width={width}
        height={height}
        css={css`
          animation: ${animation} 8s ease-in-out infinite;
        `}
      />
    </div>
  );
};

Skeleton.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

Skeleton.defaultProps = {
  width: 160,
  height: 24,
};

export default Skeleton;
