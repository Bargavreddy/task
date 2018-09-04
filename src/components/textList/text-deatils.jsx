import React from 'react'

 const TextDetails =(props) =>{
  return (
    <div>
         <div className="item">
         <button className="ui basic red button"
         onClick={()=>props.deleteTodo(props.todo.id)} >
          Delete </button> 
          { props.todo.text }
         </div>  
    </div>
  )
}
export default TextDetails;