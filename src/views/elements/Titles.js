import styled, { css } from "styled-components";
import { withSpaces } from "../utils";

export const Title = styled.h3`
  margin: 0;
  ${props =>
    props.m &&
    css`
      font-size: 1.3rem;
    `}
  ${props =>
    props.l &&
    css`
      font-size: 1.5rem;
    `}
  ${props =>
    props.xl &&
    css`
      font-size: 2rem;
    `}
  ${props =>
    props.accent &&
    css`
      color: ${props.theme.colors.accent};
    `}
  ${withSpaces}
`;
