import React from "react";
import styled from "styled-components";
import { LogoImage, LogoText } from "../elements";
import StarkIcon from "../../img/stark-icon.png";

const Logo = ({ className }) => (
  <a href="#" className={className}>
    <LogoImage src={StarkIcon} />
    <LogoText>IceAndFire</LogoText>
  </a>
);

export default styled(Logo)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  ${LogoImage} {
    margin-right: 0.5rem;
  }
  ${LogoText} {
    font-size: 1.3rem;
  }
`;
