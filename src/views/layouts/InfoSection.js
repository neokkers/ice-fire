import React from "react";
import styled from "styled-components";

const InfoSection = ({ className }) => {
  return <div className={className}></div>;
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
