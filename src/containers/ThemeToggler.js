import React from "react";
import { connect } from "react-redux";
import { setTheme } from "../actions/themeActions";
import TogglerWidget from "../views/modules/TogglerWidget";
import { lightTheme, darkTheme } from "../views/themes";

export const ThemeToggler = ({ setTheme }) => {
  return (
    <TogglerWidget
      onToggle={() => setTheme(darkTheme)}
      onUntoggle={() => setTheme(lightTheme)}
    />
  );
};

export default connect(null, { setTheme })(ThemeToggler);
