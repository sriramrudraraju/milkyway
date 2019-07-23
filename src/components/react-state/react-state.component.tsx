import React, { FC, useState } from "react";

import { useStyles } from "./react-state.styles";

export const ReactState: FC = () => {
  const classes = useStyles();

  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        className={classes.button}
        onClick={() => setCount(count + 1)}
      >
        React state Click {count}
      </button>
    </div>
  );
};
