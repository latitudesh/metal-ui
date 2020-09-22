import React from 'react';

import ArrowDown from '../../assets/ArrowDown';
import ArrowUp from '../../assets/ArrowUp';

import styles from './style';

const Controls = () => (
  <div
    className="sticky bottom-0 p-3 -ml-2 -mr-2 bg-white rounded-b-md"
    style={{ ...styles.controlBar }}
    >
      <span className="mr-2 rounded-sm text-gray-400" style={{...styles.controlKey}}>
        <ArrowDown />
      </span>
      
      <span className="mr-2 rounded-sm text-gray-400" style={{...styles.controlKey}}>
        <ArrowUp />
      </span>
      <small className="text-gray-400">to navigate</small>
  </div>
);

export default Controls;
