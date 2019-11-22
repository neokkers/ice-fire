import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./views/layouts/Header";
import InfoSection from "./views/layouts/InfoSection";

const App = ({ className }) => {
  return (
    <div className={className}>
      <Switch>
        <Route
          path="/:type"
          render={props => {
            if (
              !["books", "characters", "houses"].includes(
                props.match.params.type
              )
            )
              return <div>404</div>;
            return (
              <>
                <Header />
                <InfoSection />
              </>
            );
          }}
        ></Route>
        <Redirect from="/" exact to="/books" />
      </Switch>
    </div>
  );
};

export default App;
