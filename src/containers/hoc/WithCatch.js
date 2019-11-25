import React, { Component } from "react";
import { Title } from "../../views/elements";

function withCatch(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: false
      };
    }

    componentDidCatch() {
      this.setState({ error: true });
    }

    render() {
      const { error } = this.state;
      if (error)
        return (
          <Title m accent>
            Oops, something goes wrong with servers
          </Title>
        );
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withCatch;
