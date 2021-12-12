import React from 'react';
import ComponentC from './ComponentC'
import ComponentD from './ComponentD'

const ComponentB = () => {
    return (
        <div className="ui form">
            <ComponentC/>
            <ComponentD/>
        </div>
    )
}

export default ComponentB