import React from 'react';

import classes from './index.module.css';

export default function Title(props) {
  // eslint-disable-next-line react/prop-types
  return <h1 className={classes.Container}>{props.children}</h1>;
}
