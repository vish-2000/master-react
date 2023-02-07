import React from 'react';

const NonJsxComponent = () => {
    return(
        React.createElement("h1",{className : ''},"This is a Non jsx element")
    );
}

export default NonJsxComponent;