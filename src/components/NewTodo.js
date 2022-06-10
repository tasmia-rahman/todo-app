import React, { useState } from 'react'
import style from './newtodo.module.css'

const NewTodo = (props) => {
    const [todo, setTodo] = useState({title: '', desc: ''})

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTodo((oldTodo) => {
            return {...oldTodo, [name]: value}
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTodo(todo);
        setTodo({title: '', desc: ''});
    }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style['form-field']}>
            <label htmlFor='title'>Title: </label>
            <input type='text' name='title' onChange={handleChange}/>
        </div>
        <div className={style['form-field']}>
            <label htmlFor='desc'>Description: </label>
            <textarea name='desc' onChange={handleChange}/>
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo