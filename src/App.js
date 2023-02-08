import React from "react";

import TodoComponent from "./Todo/TodoComponent";
import Blog from "./Blog/Blog";

import BasicLifeCycleCompnent from "./ClassComponentAll/LifeCycle/BasicLifeCycleComponent";
import AdvanceLifeCycleComponent from "./ClassComponentAll/LifeCycle/AdvancedLifeCycleComponent";
import LifeCycleConstructor from "./ClassComponentAll/Constructor/LifeCycleConstructor";
import LifeCycleDerivedState from "./ClassComponentAll/getDerivedStateFromProps/LifeCycleDerivedState";
import LYComponentDidMount from "./ClassComponentAll/componentDidMount/LYComponentDidMount";
import LyShouldComponentUpdate from "./ClassComponentAll/ShouldComponentUpdate/LyShouldComponentUpdate";
import LyComponentDidUpdate from "./ClassComponentAll/componentDidUpdate/LYComponentDidUpdate";
import LyDidCatch from "./ClassComponentAll/DidCatch/LyDidCatch";

function App(){
    return(
        //<TodoComponent/>
        //<Blog />

        //<BasicLifeCycleCompnent/>
        //<AdvanceLifeCycleComponent/>

        //<LifeCycleConstructor/>
        //<LifeCycleDerivedState col='yellow'/>

        //<LYComponentDidMount/>
        //<LyShouldComponentUpdate/>
        //<LyComponentDidUpdate/>

        <LyDidCatch/>
    );
}

export default App;