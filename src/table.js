import React from "react";
import styled from "styled-components";
import Token from "./token";

const TableStyled = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
justify-items: center;
grid-gap: 50px;

& div:nth-of-type(3) {
    grid-column: span 2;
}

`
function Table() {
    return (
        <TableStyled>
            <Token name="rock" margin/>
            <Token name="scissors"/>
            <Token name="paper"/>
        </TableStyled>
    )
}
export default Table