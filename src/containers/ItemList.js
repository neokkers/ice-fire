import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchMaterialList,
  fetchMaterialSingle
} from "../actions/materialsActions";

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchMaterialSingle("houses", 2222);
  }
  render() {
    return <div>ItemList</div>;
  }
}

export default connect(null, { fetchMaterialList, fetchMaterialSingle })(
  ItemList
);
