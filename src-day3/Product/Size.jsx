import React from 'react';
import PropTypes from 'prop-types';

function Size({sizes}){

    const listOfSize = sizes.map((size,index) => {
        return <li className="bg" key={index}>{size}</li>
    })

    return(
        <React.Fragment>
            <ul>
                <li>SIZE</li>
                {listOfSize}
            </ul>
        </React.Fragment>
    ); 
}

Size.defaultProps = {
    sizes:[0,0,0,0,0]
}

Size.propTypes = {
    size:PropTypes.arrayOf(PropTypes.number).isRequired
}

export default Size;