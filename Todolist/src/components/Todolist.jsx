import React, { useState } from 'react'
import "../App.css"
import SingleTodo from './SingleTodo';
const Todolist = () => {
 const [input,setinput] =useState("")
 const[todolist,settodolist] =useState([]);
 const handlesubmit = (e)=>{
    if(input==="") return;
    if(e.key==="Enter"){
        let newtodoitem ={"todo":input,"id":Date.now()}
        settodolist([...todolist,newtodoitem])
        setinput("");
    }
 }
 console.log(todolist)
  return (
    <div className='todo'>
        <h1 className='todo-heading'>TodoList</h1>
      <input className='todo-input' type="text" onChange={(e)=>setinput(e.target.value)} onKeyDown={handlesubmit} value={input}/>
      <ul>
       {
        todolist.map((todo)=>{
            return <SingleTodo todo ={todo} todolist={todolist} key={todo.id} id={todo.id} settodolist={settodolist}/>
        })
       }
      </ul>
    
    </div>
  )
}

export default Todolist