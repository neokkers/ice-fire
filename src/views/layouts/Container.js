import styled from "styled-components";
import { withFlex } from "../utils";

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  ${withFlex}
`;

export const VHContainer = styled.div`
  height: ${props => props.vh}vh;
  overflow-y: scroll;
`;
