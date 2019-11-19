import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { withColors } from "../utils";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  a {
    margin-left: 2rem;
  }
`;

const Item = ({ className, to, title }) => {
  return (
    <Link className={className} to={to}>
      {title}
    </Link>
  );
};

export const NavItem = styled(Item)`
  /* ${withColors} */
  font-weight: bold;
  ${props =>
    props.selected &&
    css`
      color: ${props.theme.colors.accent};
    `}
`;
