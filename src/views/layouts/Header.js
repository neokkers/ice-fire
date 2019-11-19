import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Logo from "../modules/Logo";
import { Container } from "../layouts/Container";
import { withColors } from "../utils";
import NavContainer from "../../containers/NavContainer";
import ThemeToggler from "../../containers/ThemeToggler";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Container flex={{ justify: "space-between", align: "center" }}>
        <Logo />
        <NavContainer />
        <ThemeToggler />
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
