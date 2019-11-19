import { css } from "styled-components";

// Font mixins
export const logoFont = css`
  font-family: "Cinzel", serif;
`;
export const mainFont = css`
  font-family: "Arimo", sans-serif;
`;

// Color mixins
export const withColors = css`
  color: ${props =>
    props.theme.colors[props.color] || props.theme.colors.primary};
  background-color: ${props =>
    props.theme.colors[props.bgColor] || props.theme.colors.bgPrimary};
`;

// Other
export const withFlex = css`
  ${props =>
    props.flex &&
    css`
      display: flex;
      justify-content: ${props.flex.justify};
      align-items: ${props.flex.align};
    `}
`;
