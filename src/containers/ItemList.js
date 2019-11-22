import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMaterialList } from "../actions/materialsActions";

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchMaterialList("houses");
  }
  render() {
    return <div>ItemList</div>;
  }
}

export default connect(null, { fetchMaterialList })(ItemList);
