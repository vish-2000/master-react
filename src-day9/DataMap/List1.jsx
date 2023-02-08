import React from 'react';

function List1(props){
    let num = [1,2,3,4,5,6,7,8,9]

    let ListOfNumber = num.map((ele,index) => {
        return <li key={index}>{ele*5}</li>
    });

    return(
        <div>
            <h1>Number List</h1>
            <ul>
                {ListOfNumber}
            </ul>
        </div>
    )
}

export function List2(props){
    const Namelist = props.list;
    console.log(props.list);
}

export default List1;

//export default {List1,List2}