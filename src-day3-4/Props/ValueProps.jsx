import React from "react";

function ValueProps(props){
    return(
        <div>
            <div><i>String Literals:</i>{props.stringdata}</div>

            <div><i>Template Literals:</i>{props.templatedata}</div>
            <div><i>Number Literals:</i>{props.numberdata}</div>
            <div><i>Boolean Literals:</i>{props.booldata}</div>
            <div><i>Object Literals:</i>{props.objdata}</div>
            <div><i>Array Literals:</i>{props.arrdata}</div>
            <div><i>JSX Literals:</i>{props.jsxdata}</div>
        </div>
    );
}

export default ValueProps;