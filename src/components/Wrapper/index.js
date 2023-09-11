import React from 'react';

import classes from './index.module.css';

export default function Wrapper(props) {
  // eslint-disable-next-line react/prop-types
  return <div className={classes.Container}>{props.children}</div>;
}
