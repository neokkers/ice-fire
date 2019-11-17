import styled from "styled-components";
import { mainFont, logoFont } from "../utils";

export const Text = styled.p`
  font-size: 0.9rem;
  margin: 0;
  ${mainFont}
`;

export const LogoText = styled(Text)`
  ${logoFont}
`;
