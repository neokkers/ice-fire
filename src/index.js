import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./views/utils";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider, connect } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

class Root extends React.Component {
  render() {
    const { theme } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.theme.theme
});

const RootWithRouter = withRouter(connect(mapStateToProps)(Root));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithRouter></RootWithRouter>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// store.dispatch(fetchMaterialList("books"));
