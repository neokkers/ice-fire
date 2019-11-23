import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchMaterialList,
  fetchMaterialSingle
} from "../actions/materialsActions";
import { withRouter } from "react-router-dom";
import List from "../views/modules/List";

class ItemList extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.fetchMaterialList(match.params.type);
  }
  render() {
    const { materials, match } = this.props;
    return (
      <List
        items={materials.lists[match.params.type]}
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
