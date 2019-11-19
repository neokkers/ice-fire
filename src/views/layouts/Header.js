import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { withColors } from "../utils";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Logo />
      <nav>e</nav>
    </header>
  );
};

export default styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 2rem;
  ${withColors}
`;
