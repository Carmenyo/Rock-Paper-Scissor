import React from "react";
import styled from "styled-components";

const TokenStyled = styled.div`
  width: 130px;
  height: 130px;
  border: 15px solid ${(props) => props.color.base};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  box-sizing: border-box;
  box-shadow: 0 5px 0 0 ${(props) => props.color.border};
  cursor: pointer;
  &:active{
    transform: scale(.9);
  }
  .box {
    box-shadow: 0 -5px 0 0 #bcc1d5;
    flex: 1;
    border-radius: 50%;
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const colors = {
    paper: {
       border: `#2543c3` ,
       base:  `#516ef4`,
    },
    rock: {
        border: `#980e31` ,
        base:  `#de3a5a`,
     },

     scissors: {
        border: `#c76c14` ,
        base:  `#eca81e`,
     },
}



function Token({ name }) {
  return (
    <TokenStyled color={colors[name]}>
      <div className="box">
        <img src={`./images/icon-${name}.svg`} />
      </div>
    </TokenStyled>
  );
}
export default Token;
