import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Logo from "./Logo";
import { Container } from "../elements";
import { withColors } from "../utils";
import { Nav, NavItem } from "./Nav";

const Header = ({ className, match }) => {
  const { type } = match.params;
  return (
    <header className={className}>
      <Container flex={{ justify: "space-between", align: "center" }}>
        <Logo />
        <Nav>
          <NavItem to="/books" title="Books" selected={type === "books"} />
          <NavItem
            to="/characters"
            title="Characters"
            selected={type === "characters"}
          />
          <NavItem to="/houses" title="Houses" selected={type === "houses"} />
        </Nav>
      </Container>
    </header>
  );
};

export default styled(withRouter(Header))`
  ${Container} {
    height: 70px;
  }
  ${withColors}
`;
