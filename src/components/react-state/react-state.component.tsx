import React, { FC, useState } from 'react';

import { Button } from '@material-ui/core';

import { useStyles } from './react-state.styles';

export const ReactState: FC = () => {
  const classes = useStyles();

  const [count, setCount] = useState(0);
  return (
    <div>
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        onClick={() => setCount(count + 1)}
      >
        React state Click {count}
      </Button>
    </div>
  );
};
