import React from "react";
import styled from "styled-components";
import ItemList from "../../containers/ItemList";

const InfoSection = ({ className }) => {
  return (
    <div className={className}>
      <ItemList />
    </div>
  );
};

export default styled(InfoSection)`
  display: flex;
  > * {
    &:first-child {
      flex: 1;
    }
    &:last-child {
      flex: 3;
    }
  }
`;
