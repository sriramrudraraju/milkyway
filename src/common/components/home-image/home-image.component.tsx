import React from 'react';
import { Paper, Button } from '@material-ui/core';

import { useStyles } from './home-image.styles';

interface HomeImageProps {
  src: string;
  name: string;
  height?: number;
  width?: number;
}

export const HomeImage = (props: HomeImageProps) => {
  const classes = useStyles();
  console.log('re');
  return (
    <div className={classes.root}>
      <Paper
        style={{ height: props.height, width: props.width, contain: 'content' }}
      >
        <img src={props.src} alt={props.name} className={classes.img} />
      </Paper>
      <Button variant="outlined" className={classes.button}>
        {props.name}
      </Button>
    </div>
  );
};

HomeImage.defaultProps = {
  height: 300,
  width: 350,
};
