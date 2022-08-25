import React from 'react'

function Todo(props) {
  const { data,deleteTodo, handleChange } = props;

  const handleChangebox = () => {
    if(data.done)
    return null;
    handleChange(data.id);
  }
  return (
    <div className='checkbox'>
      <input type="checkbox" checked={data.done} onChange={() => handleChangebox()} />
      <span style={data.done ? {textDecoration: 'line-through'}: null}>{data.text}</span>
      <button onClick={() => deleteTodo(data)}>X</button>
    </div>
  )
}

export default Todo










