import React from "react";
import { withRouter } from "react-router-dom";
import { Nav, NavItem } from "../views/modules/Nav";

const NavContainer = ({ match }) => {
  const { type } = match.params;

  return (
    <Nav>
      <NavItem to="/books" title="Books" selected={type === "books"} />
      <NavItem
        to="/characters"
        title="Characters"
        selected={type === "characters"}
      />
      <NavItem to="/houses" title="Houses" selected={type === "houses"} />
    </Nav>
  );
};

export default withRouter(NavContainer);
