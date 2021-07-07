import React, { useRef } from 'react'
import "../02-useEffect/effects.css";

export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef);

    const handleClick= () => {
        inputRef.current.select();
        console.log(inputRef);
    }
    return (
        <>
            <h1>FocusScreen</h1>
            <hr></hr>
            <input 
                className="form-control" 
                placeholder="Su nombre"
                ref= { inputRef }/>
            <button 
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }>
                Focus
            </button>
        </>

    )
}
