import React, { useEffect, useRef } from 'react';

import ArrowDown from '../../assets/ArrowDown';
import ArrowUp from '../../assets/ArrowUp';
import { useTabController } from '../../providers/TabController';

import styles from './style';

const Controls = () => {
  const controlsRef = useRef(null);
  const { setControlsHeight } = useTabController();
  
  useEffect(() => {
    if (controlsRef?.current) {
      setControlsHeight(controlsRef.current.offsetHeight);
    }
  }, []);

  return (
    <div
      className="p-3 bg-white rounded-b-md"
      style={{ ...styles.controlBar }}
      ref={controlsRef}
    >
      <span className="mr-2 rounded-sm text-gray-400" style={{ ...styles.controlKey }}>
        <ArrowDown />
      </span>

      <span className="mr-2 rounded-sm text-gray-400" style={{ ...styles.controlKey }}>
        <ArrowUp />
      </span>
      <small className="text-gray-400">to navigate</small>
    </div>
  )
};

export default Controls;
