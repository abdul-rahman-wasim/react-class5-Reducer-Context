import React, {useReducer} from 'react';
import CounterReducer from './CounterReducer';

const ChildReducer = ()=> {

    let [state,dispatch]=useReducer(CounterReducer,1);

    return(

        <div>
            <br/>
            <h1>Reducer</h1>
            <h1>Value of Redicer is {state}</h1>
            <button onClick={()=>dispatch('INCREMENT')} >Reducer Button</button>
        </div>


    );
}

export default ChildReducer;
