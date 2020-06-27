import React from "react";
import "./Li.css"

function Li (props) {
    return(
        <li> {props.name} {props.price}</li>
    )
}

export default Li;