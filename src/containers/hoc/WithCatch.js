import React, { Component } from "react";

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
      if (error) return <div>Oops, something goes wrong with servers</div>;
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withCatch;
