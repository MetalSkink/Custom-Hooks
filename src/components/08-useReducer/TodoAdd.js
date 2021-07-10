import React from 'react'
import { useForm } from '../../hooks/useForm';


export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset ] = useForm({
        description: '',
    });
    
    const handleSubmit = (e) =>{
        if (description.trim().length <= 1) {
            return
        }
    
        e.preventDefault();
        // console.log('nueva tareas');
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false 
        }
    
        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                                name="description"
                                className="form-control"
                                placeholder="Aprender..."
                                autoComplete="off"
                                value={description}
                                onChange={handleInputChange}/>

                        <div className="d-grid gap-2 mt-2">
                        <button 
                            className="btn btn-outline-primary  btn-block"
                            type="submit">
                            Agregar
                        </button>
                        </div>
                    </form>   
        </>
    )
}
