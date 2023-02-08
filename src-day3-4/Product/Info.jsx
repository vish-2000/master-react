import React from 'react';

import Details from './Details';
import Title from './Title';
import Size from './Size';
import Color from './Color';
import Button from './Button';

function Info(){
    return(
        <React.Fragment>
            <div className="product-info">
                {/* <Title name="Airmax Pro"/>
                <Details 
                    collection='Summer Collection' 
                    headline='Men Black Sneakers'
                    rackprice={2500}
                    mainprice={1500}    
                /> */}

                <Title />
                <Details />
        
                {/* <Size sizes={[7,8,9,10,11]}/>
                <Color colors={['yellow', 'black','blue','lightblue','green']} />
             */}

                <Size />
                <Color />
                <Button />
            </div>
        </React.Fragment>

    );
}

export default Info;