import React from "react";
import List1, {List2} from "./DataMap/List1";
function App(){
    const NameList = ['Anjani','Vishesh','Joyeta','Sarani']

    return(
        <>
            <List1 />
            <List2 list={NameList}/>
        </>
    );
}

export default App;