import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchMaterialList,
  fetchMaterialSingle
} from "../actions/materialsActions";
import { withRouter } from "react-router-dom";
import List from "../views/modules/List";

class ItemList extends Component {
  async componentDidMount() {
    const { match, fetchMaterialList } = this.props;
    fetchMaterialList(match.params.type, 1);
  }
  render() {
    const { materials, match } = this.props;
    return (
      <List
        items={materials.lists[match.params.type].data}
        renderF={item => item.name}
      />
    );
  }
}

const mapStateToProps = state => ({
  materials: state.materials
});

export default connect(mapStateToProps, {
  fetchMaterialList,
  fetchMaterialSingle
})(withRouter(ItemList));
