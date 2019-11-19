import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { Container } from "../elements";
import { withColors } from "../utils";
import { Nav, StyledNavItem } from "./Nav";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Container flex={{ justify: "space-between", align: "center" }}>
        <Logo />
        <Nav>
          <StyledNavItem to="/characters" selected>
            Characters
          </StyledNavItem>
        </Nav>
      </Container>
    </header>
  );
};

export default styled(Header)`
  ${Container} {
    height: 70px;
  }
  ${withColors}
`;
