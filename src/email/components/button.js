import React from "react"
import styled, { css } from "styled-components";

export function Button ({label, clickFunc}) {

    const Button = styled.button`
        border-radius: 5px;
        border: none;
        background-color: rgb(44, 24, 104.0);
        text-decoration: none;
        margin: 5px;
        cursor: pointer;
        height: 40px;   
        width: 150px;
        font-weight: 600;
        color: white;
    `;

    return(
        <React.Fragment>
            <Button onClick={() => clickFunc()}>
                {label}
            </Button>            
        </React.Fragment>

    )
}

export default Button