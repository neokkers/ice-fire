import styled from "styled-components";

export const Button = styled.div`
  padding: 1rem 2rem;
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

// const Loadig = ({ className, loading }) => {
//   return (
//     {loading ? }
//   )
// }
