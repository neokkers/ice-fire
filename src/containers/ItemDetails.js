import React, { Component } from "react";
import { connect } from "react-redux";
import withCatch from "./hoc/WithCatch";
import { fetchMaterialSingle } from "../actions/materialsActions";
import { withRouter } from "react-router-dom";
import { Title, Spinner, ButtonWithSpinner } from "../views/elements";
import { VHContainer } from "../views/layouts/Container";

class ItemDetails extends Component {
  componentDidMount() {
    const { match, fetchMaterialSingle } = this.props;
    setTimeout(() => fetchMaterialSingle(match.params.type, 1), 2000);
    // fetchMaterialList("bookss", 1);
  }

  // componentDidUpdate(prevProps) {
  //   const { match, fetchMaterialList, materials } = this.props;

  //   if (materials.lists.error) throw new Error();

  //   if (prevProps.match.params.type !== match.params.type) {
  //     if (!materials.lists[match.params.type].data)
  //       fetchMaterialList(match.params.type, 1);
  //   }
  // }

  render() {
    const { materials, match, fetchMaterialList } = this.props;
    const next = materials.lists[match.params.type].next;
    const spinnerVisible =
      !materials.lists[match.params.type].data && materials.lists.loading;

    return (
      <>
        {spinnerVisible ? (
          <Spinner big />
        ) : (
          <VHContainer vh="75">wf</VHContainer>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  materials: state.materials
});

export default connect(mapStateToProps, {
  fetchMaterialSingle
})(withRouter(withCatch(ItemDetails)));
