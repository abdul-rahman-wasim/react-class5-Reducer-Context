import React, {useContext} from 'react';
import CounterContext from './CounterContext';

const Child = (props) =>{
    let count = useContext(CounterContext);
    return(
        <div>
            <h1>Value of Counter is {props.name} </h1>
            <h1>Value of Counter is {count[0]} </h1>
            <br/>
            <button onClick={ ()=>{count[1](++count[0]) } } >Add</button>
        </div>
    );

}

export default Child;