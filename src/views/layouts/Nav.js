import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { withColors } from "../utils";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  a {
    margin: 0 2rem;
  }
`;

const NavItem = ({ className, to, children }) => {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

export const StyledNavItem = styled(NavItem)`
  /* ${withColors} */
  font-weight: bold;
  ${props =>
    props.selected &&
    css`
      color: ${props.theme.colors.accent};
    `}
`;
