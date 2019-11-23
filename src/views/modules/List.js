import React from "react";
import styled from "styled-components";
import { withColors } from "../utils";
import shortid from "shortid";

const ListItem = styled.li`
  padding: 1rem 2rem;
  border-left: 1px solid ${props => props.theme.colors.primary};
  cursor: pointer;
  ${withColors};
  &:hover {
    color: ${props => props.theme.colors.accent};
    border-left: 1px solid ${props => props.theme.colors.accent};
  }
`;

const List = ({ className, items, onClick, renderF }) => {
  if (!items) return null;
  return (
    <ul className={className}>
      {items.map(el => (
        <ListItem onClick={() => onClick(el)} key={shortid.generate()}>
          {renderF(el)}
        </ListItem>
      ))}
    </ul>
  );
};

export default styled(List)`
  list-style-type: none;
  margin: 0;
  padding: 0;
  ${ListItem} {
    margin-bottom: 0.3rem;
    /* margin-top: -1px; */
  }
`;
