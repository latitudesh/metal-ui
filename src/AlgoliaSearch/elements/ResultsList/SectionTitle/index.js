import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => (
  <div className="pb-2 pt-3 sticky top-0 bg-white">
    <p className="font-bold text-gray-800 text-sm">{title}</p>
  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
