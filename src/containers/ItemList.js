import React, { Component } from "react";
import { connect } from "react-redux";
import withCatch from "./hoc/WithCatch";
import {
  fetchMaterialList,
  fetchMaterialSingle
} from "../actions/materialsActions";
import { withRouter } from "react-router-dom";
import List from "../views/modules/List";
import { Button, Title, Spinner } from "../views/elements";

class ItemList extends Component {
  componentDidMount() {
    const { match, fetchMaterialList } = this.props;
    fetchMaterialList(match.params.type, 1);
    // fetchMaterialList("bookss", 1);
  }

  componentDidUpdate(prevProps) {
    const { match, fetchMaterialList, materials } = this.props;

    if (materials.lists.error) throw new Error();

    if (prevProps.match.params.type !== match.params.type) {
      if (!materials.lists[match.params.type].data)
        fetchMaterialList(match.params.type, 1);
    }
  }

  render() {
    const { materials, match, fetchMaterialList } = this.props;
    const next = materials.lists[match.params.type].next;
    const spinnerVisible =
      !materials.lists[match.params.type].data && materials.lists.loading;

    return (
      <div>
        <Title m mb="m" accent>
          {match.params.type}
        </Title>
        {spinnerVisible ? (
          <Spinner />
        ) : (
          <>
            <List
              items={materials.lists[match.params.type].data}
              selected={materials.single[match.params.type]}
              renderF={item => (item.name ? item.name : "Unknown")}
            />
            {next && (
              <Button
                onClick={() => fetchMaterialList(match.params.type, next)}
              >
                More
              </Button>
            )}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  materials: state.materials
});

export default connect(mapStateToProps, {
  fetchMaterialList,
  fetchMaterialSingle
})(withRouter(withCatch(ItemList)));
