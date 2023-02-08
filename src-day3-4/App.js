import React from "react";
// import SingleProps from "./Props/SingleProps";
// import MultipleProps from "./Props/MultipleProps";
// import ValueProps from "./Props/ValueProps";
// import PassingTheProps from "./Props/PassingTheProps";
// import OptionalProps from "./Props/OptionalProps";
// import PropsSpread from "./Props/PropsSpread";

// import Parent from "./Relationship/Parent";

import OtherProps from "./Validation/OtherType";
import Product from "./Product/Product";

import InValidProps from "./Validation/InValidProps";
import ValidProps from "./Validation/ValidProps";

import AllPropsValidation from "./Validation/AllPropsValidation";

import Card from "./State/Card";
import CounterComponent from "./State/CounterComponent";
import ToggleComponent from "./State/ToggleComponent";

function App(){
    // const randomvalue = 40;
    // const arr = ['React', 'is', 'Lib'];

    // const obj = { a: 'React', b: 'is', c: 'Lib' }
    return(
        // <>
        //     <SingleProps data='SingleProps' />
        //     <br />
        //     <MultipleProps x='Multiple' y='Props'/>
        //     <br />
        // </>

        // <>
        //     <ValueProps 
        //     stringdata="This a String Data"
        //     templatedata=<p>{'This is a template data and age: ${randomvalue}'}</p>
        
        //     numberdata={23}
        //     booldata={false}
        //     objdata={{name: 'dev'}}
        //     arrdata={['arr1','arr2']}
        //     jsxdata={2+2/3*6-7+8}
        //      />
        // </>

        // <>
        //     <PassingTheProps Students={['dev','deb','kunal','Arnab']}/>
        // </>

        // <>
        //     <OptionalProps/>
        //     <br />
        //     <OptionalProps person='Vishesh'/>

        //     <PropsSpread a='React' b='is' c='Library' />
        //     <br />
        //     <h5>Array with spread not working because No key is present</h5>
        //     <PropsSpread {...arr} />
        //     <br />
        //     <h5>Only Object with spread is working</h5>
        //     <PropsSpread {...obj} />
        //     <br />
        //     <h5>Only Array is not working because No key is present</h5>
        //     <PropsSpread arr />
        //     <br />
        //     <h5>Only Object is not working</h5>
        //     <PropsSpread obj />

        //     <br/>
        //     <PropsSpread a={arr[0]} b={arr[1]} c={arr[2]} />
        //     <br/>
        //     <PropsSpread a={obj.a} b={obj.b} c={obj.c} />
        // </>
        // <Parent>
        //         {<div>
        //             <h1>When we need to pass Child</h1>
        //             <p>We need to use Tag Component</p>
        //         </div>}
        //     </Parent>
        // <>
        //     <Product />
        // </>
        <>
            {/* <InValidProps />
            <ValidProps /> 
            <AllPropsValidation />*/}

            {/* <Card />
            <br/>
            <CounterComponent /> */}

            {/* <ToggleComponent /> */}

            <OtherProps />
        </>
        
    );
}

export default App;