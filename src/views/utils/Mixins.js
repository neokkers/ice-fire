import { css } from "styled-components";

// Font mixins
export const logoFont = css`
  font-family: "Cinzel", serif;
`;
/* export const mainFont = css`
  font-family: "Arimo", sans-serif;
`; */
export const mainFont = css`
  font-family: "Cinzel", serif;
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
export const withSpaces = css`
  ${props =>
    props.mt &&
    css`
      margin-top: ${props.theme.spaces[props.mt]};
    `}
  ${props =>
    props.mb &&
    css`
      margin-bottom: ${props.theme.spaces[props.mb]};
    `}
  ${props =>
    props.ml &&
    css`
      margin-left: ${props.theme.spaces[props.ml]};
    `}
  ${props =>
    props.mr &&
    css`
      margin-right: ${props.theme.spaces[props.mr]};
    `}
  ${props =>
    props.my &&
    css`
      margin: ${props.theme.spaces[props.my]} 0;
    `}
  ${props =>
    props.mx &&
    css`
      margin: 0 ${props.theme.spaces[props.mx]};
    `}
`;
