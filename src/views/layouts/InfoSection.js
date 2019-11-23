import React from "react";
import styled from "styled-components";
import ItemList from "../../containers/ItemList";
import { Container } from "../../views/layouts/Container";

const InfoSection = ({ className }) => {
  return (
    <div className={className}>
      <Container>
        <ItemList />
      </Container>
    </div>
  );
};

export default styled(InfoSection)`
  margin-top: 2rem;
  ${Container} {
    display: flex;
    > * {
      &:first-child {
        flex: 1;
      }
      &:last-child {
        flex: 3;
      }
    }
  }
`;
