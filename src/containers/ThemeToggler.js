import React from "react";
import { connect } from "react-redux";
import { setTheme } from "../actions/themeActions";
import TogglerWidget from "../views/modules/TogglerWidget";
import { lightTheme, darkTheme } from "../views/themes";

export const ThemeToggler = ({ setTheme, theme }) => {
  console.log(theme);
  return (
    <TogglerWidget
      toggled={theme.name === "dark"}
      onToggle={() => setTheme(darkTheme)}
      onUntoggle={() => setTheme(lightTheme)}
    />
  );
};

const mapStateToProps = state => ({
  theme: state.theme.theme
});

export default connect(mapStateToProps, { setTheme })(ThemeToggler);
