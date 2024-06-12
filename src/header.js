import React from "react";
import styled from "styled-components";
import Score from "./score";

const HeaderStyled = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
color: white;
border: 3px solid rgba(255,255,255,.29);
border-radius: .5em;
padding: 12px 12px 12px 23px;
h1{
font-size:21px;
text-transform: uppercase;
line-height: 16px;



}
`
function Header() {
    return (
        <HeaderStyled>
         <h1>
            Rock <br/> Paper <br/> Scissors
         </h1>

         <Score/>
        </HeaderStyled>
    )
}
export default Header