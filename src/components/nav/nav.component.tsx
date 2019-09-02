import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@material-ui/core';

const NavComponent = (props: RouteComponentProps) => {
  const [value, setValue] = React.useState('/');

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
    props.history.push(newValue);
  }

  return (
    <React.Fragment>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Home" value="/" />
          <Tab label="React Store" value="/reactStore" />
          <Tab label="Mobx Store" value="/mobxStore" />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
};

export const Nav = withRouter(NavComponent);
