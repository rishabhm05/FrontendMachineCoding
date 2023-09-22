import React, { useEffect, useRef, useState } from 'react'

const SingleTodo = ({todo,todolist,settodolist}) => {
 const[completed,setcompleted] =useState(false);
 const[edit,setedit] =useState(false);
 const[editvalue,seteditvalue] =useState(todo.todo)
 const inputref =useRef(null)

 const handleedit =(e,id)=>{
    console.log("called")

    if(editvalue==="") return;
    if(e.key==="Enter"){
       
       let newtodo =todolist.map((todo)=>{
        if(todo.id===id){
            return {...todo,todo:editvalue}
        }
        else{
            return todo;
        }
       })
       
      settodolist(newtodo)
     setedit(false)
    }
 }
 const handledelete =(id)=>{
    let newtodo = todolist.filter((todo)=>todo.id!==id)
    settodolist(newtodo)

 }
  return (
    <>
    {!edit&&<li className='singletodo' onDoubleClick={()=>setedit(true)}>
        <input type="checkbox" onClick={()=>setcompleted(!completed)}/>
        <span>{todo.todo}</span>
        <span onClick={()=>handledelete(todo.id)}>❌</span>
        {completed&&<div className='line'></div>}
    </li>
  }
  {edit&&
  <input onBlur={()=>setedit(false)} className='singletodoinput' value={editvalue} onChange={(e)=>seteditvalue(e.target.value)} onKeyDown={(e)=>handleedit(e,todo.id)}/>}
  </>
    
  )
}

export default SingleTodo