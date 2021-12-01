import React from 'react';
import Subcontents from './Subcontents';

const Main = () =>{

    return (
        <div className = "Main">
            
            <p> Things I need to do: </p>
            <Subcontents text = "Learn React"/>
            <Subcontents text = " Climb Mt. Everest!"/>
            <Subcontents text = "Run A Marathon"/>
            <Subcontents text = "Feed The Dogs <3"/>
        </div>
    )
}

export default Main;