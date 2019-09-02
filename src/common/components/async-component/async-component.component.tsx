/* eslint-disable */
import React, { Component } from 'react';

export default function asyncComponent(importComponent: any) {
  class AsyncComponent extends Component<any, any> {
    public constructor(props: any) {
      super(props);

      this.state = {
        component: null,
      };
    }

    public async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component,
      });
    }

    public render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}

// using
// const AsyncHome = asyncComponent(() => import("./containers/Home"));
// and use AsyncHome component in the route
