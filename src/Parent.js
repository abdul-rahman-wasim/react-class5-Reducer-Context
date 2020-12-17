import React from 'react';
import Child from './Child';
import ChildReducer from './ChildReducer';

const Parent = (props) =>{
    return(
        <div>
        <Child name={props.name}/>
        <ChildReducer/>
        </div>
    );

}

export default Parent;