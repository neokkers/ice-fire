import React, { Component } from "react";
import ApiService from "./services/ApiService";
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
        <Header />
      </div>
    );
  }
}
