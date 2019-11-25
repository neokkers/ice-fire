import styled from "styled-components";
import React from "react";
import { Spinner } from "./Spinners";

export const Button = styled.div`
  /* padding: 1rem 2rem; */
  height: 3.3rem;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.accent};
  color: white;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scaleY(1.05) scaleX(1.01);
  }
`;

export const ButtonWithSpinner = ({ loading, children, onClick }) => {
  return (
    <>
      {loading ? (
        <Button onClick={onClick}>
          <Spinner small white />
        </Button>
      ) : (
        <Button onClick={onClick}>{children}</Button>
      )}
    </>
  );
};

// const Loadig = ({ className, loading }) => {
//   return (
//     {loading ? }
//   )
// }
