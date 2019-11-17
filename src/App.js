import React, { Component } from "react";
import ApiService from "./services/ApiService";
export default class App extends Component {
  apiService = new ApiService();

  async componentDidMount() {
    const items = await this.apiService.getResource("books");
    console.log(items);
  }
  render() {
    return (
      <div className="app">
        <Header>
          <Logo />
          <Nav>
            <NavItem route="books" title="Books" />
            <NavItem route="characters" title="Characters" />
          </Nav>
        </Header>
      </div>
    );
  }
}
