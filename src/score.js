import React from "react";
import styled from "styled-components";

const ScoreStyled = styled.div`
background:white;
text-align: center;
padding: 10px;
border-radius: 8px;
width: 80px;
font-weight:700;
small {
    color: #2A45C2;
    text-transform: Uppercase;
    font-size: 10px;
}

p {
    color: #565468;
    margin: 0;
    font-size: 40px;
    margin: 0;
    letter-spacing:-5px;
    position: relative;
    left:-3px;
}
`
function Score() {
    return (
        <ScoreStyled>
            <small>Score</small>
           
           <p>
            12
           </p>
        </ScoreStyled>
    )
}
export default Score