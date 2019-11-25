import React from "react";
import styled, { css } from "styled-components";

const StyledSpinner = styled.div`
  @keyframes ldio-11ijs70r4dsd {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  > div > div {
    position: absolute;
    /* width: 36px; */
    /* height: 36px; */
    ${props =>
      props.white
        ? css`
            border: 4px solid white;
          `
        : css`
            border: 4px solid ${props => props.theme.colors.accent};
          `}
    
    /* border-color: 4px solid ${props => props.white && "white"}; */
    border-top-color: transparent;
    border-radius: 50%;
  }
  > div > div {
    animation: ldio-11ijs70r4dsd 1s linear infinite;
    /* top: 23px; */
    /* left: 23px; */
  }

  /* width: 46px; */
  /* height: 46px; */

  ${props =>
    props.small &&
    css`
      > div > div {
        width: 12px;
        height: 12px;
        top: 12px;
        left: 12px;
      }
      width: 25px;
      height: 25px;
    `}
  ${props =>
    props.big &&
    css`
      > div > div {
        width: 36px;
        height: 36px;
        top: 23px;
        left: 23px;
      }
      width: 46px;
      height: 46px;
    `}

  display: inline-block;
  overflow: hidden;
  /* background: #ffffff; */

  > div {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  > div > div {
    box-sizing: content-box;
  }
`;
export const Spinner = ({ className, ...props }) => {
  return (
    <StyledSpinner className={className} {...props}>
      <div>
        <div></div>
      </div>
    </StyledSpinner>
  );
};
