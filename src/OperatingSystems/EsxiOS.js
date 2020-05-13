import React from "react";
import PropTypes from "prop-types";
import OperatingSystem from "./OperatingSystem";

const EsxiOS = ({ size, viewBox, enableBackground }) => {
  return (
    <OperatingSystem
      size={size}
      viewBox="0 0 24 10"
      enableBackground={enableBackground}
    >
      <g fillRule="nonzero" transform="translate(-1 -1)">
        <path d="M2.016.988a1.007 1.007 0 00-.871.469c-.188.3-.2.676-.04.988l4 8.004a1 1 0 001.766.043l3.75-6.625c.004-.004.004-.008.004-.015 0 .003.484-.852 1.375-.852h.016s.289.008.543.133c.254.129.441.18.441.867v6c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879V4.5a1.5 1.5 0 013 0V10c-.008.523.395.965.918 1.012.031 0 .062.004.098.004.55-.012.992-.465.984-1.016V4.5a1.5 1.5 0 013 0V10c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879V4.5c0-1.793-1.395-3.238-3.14-3.43A1.015 1.015 0 0021.5 1 3.49 3.49 0 0019 2.063 3.49 3.49 0 0016.5 1a1.018 1.018 0 00-.36.074 3.555 3.555 0 00-1.937.856 2.642 2.642 0 00-.762-.586C12.7.977 12 1 11.992 1c-2.105.008-3.117 1.898-3.117 1.898l.004-.015-2.824 4.992-3.16-6.32a1 1 0 00-.88-.567h.001z"></path>
      </g>
    </OperatingSystem>
  );
};

EsxiOS.propTypes = {
  size: PropTypes.number,
  viewBox: PropTypes.string,
  enableBackground: PropTypes.string,
};

export default EsxiOS;
