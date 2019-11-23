export const lightTheme = {};
export const darkTheme = {};

const spaces = {
  xs: "0.5rem",
  s: "0.9rem",
  m: "1.5rem",
  l: "2rem",
  xl: "3rem"
};

lightTheme.name = "light";
darkTheme.name = "dark";

lightTheme.spaces = spaces;
darkTheme.spaces = spaces;

lightTheme.colors = {
  primary: "#222",
  accent: "#5290f2",
  secondary: "#999",
  bgPrimary: "#eee",
  danger: "tomato"
};
darkTheme.colors = {
  primary: "white",
  accent: "tomato",
  secondary: "#999",
  bgPrimary: "#333",
  danger: "blue"
};
