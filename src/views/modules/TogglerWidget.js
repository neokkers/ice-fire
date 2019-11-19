import React, { Component } from "react";
import styled from "styled-components";

const Toggler = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  > div {
    height: 2rem;
    width: 3rem;
    display: flex;
    transition: 0.4s;
    position: absolute;
    left: -1rem;
    transform: translateX(${props => (props.toggled ? 1 : 0)}rem);
    > div {
      flex-shrink: 0;
      height: 2rem;
      width: 1rem;
      &:first-child {
        background-color: #111;
      }
      &:nth-child(2) {
        background-color: ${props => props.theme.colors.accent};
      }
      &:last-child {
        background-color: #fff;
      }
    }
  }
`;

class TogglerWidget extends Component {
  onToggle = () => {
    const { toggled } = this.props;
    const { onToggle, onUntoggle } = this.props;

    toggled ? onUntoggle() : onToggle();
  };
  render() {
    return (
      <Toggler onClick={this.onToggle} toggled={this.props.toggled}>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Toggler>
    );
  }
}

export default TogglerWidget;
