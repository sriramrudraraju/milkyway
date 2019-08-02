import React, { FC } from 'react';

import { observer } from 'mobx-react';
import { Button } from '@material-ui/core';

import { useAppStore } from '../../stores';

import { useStyles } from './mobx-store.styles'

export const MobxStore: FC = observer(
  () => {
    const classes = useStyles();
    const appStore = useAppStore();

    return (
      <div>
        <Button
          className={classes.button}
          color="secondary"
          variant="contained"
          onClick={() => appStore.incrementCounter()}
        >
          Mobx store Click {appStore.counter}
        </Button>
      </div>
    )
  }
)