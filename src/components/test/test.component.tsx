import React, { FC, useState } from "react";

import { useStyles } from "./test.styles";

export const Test = () => {
  const classes = useStyles();

  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <button
        className={classes.button}
        onClick={() => setCount(count + 1)}
      >
        Click {count}
      </button>
    </React.Fragment>
  );
};
