import React, { FC } from 'react';

import { observer } from 'mobx-react';

import { useAppStore } from '../../stores';

import { useStyles } from './mobx-store.styles'

export const MobxStore: FC = observer(
  () => {
    const classes = useStyles();
    const appStore = useAppStore();

    return (
      <div>
        <button
          className={classes.button}
          onClick={() => appStore.incrementCounter()}
        >
          Mobx store Click {appStore.counter}
        </button>
      </div>
    )
  }
)