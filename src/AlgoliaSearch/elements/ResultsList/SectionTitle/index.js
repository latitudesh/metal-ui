import React from "react";
import PropTypes from "prop-types";
import Text from "../../../../Typography/Text";

const SectionTitle = ({ title }) => (
  <div className="py-2 mb-2 top-0 bg-white border-b border-gray-200">
    <Text is="p">{title}</Text>
  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
