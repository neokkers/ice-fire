import React, { Component } from "react";
import ApiService from "./services/ApiService";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./views/layouts/Header";

export default class App extends Component {
  apiService = new ApiService();

  async componentDidMount() {
    const items = await this.apiService.getResource("books");
    console.log(items);
  }
  render() {
    return (
      <div className="app">
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
                </>
              );
            }}
          ></Route>
          <Redirect from="/" exact to="/books" />
        </Switch>
      </div>
    );
  }
}
