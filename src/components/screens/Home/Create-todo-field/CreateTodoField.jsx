import React, { useState } from 'react';

const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState('')

  const addTodo = (title) => {
    setTodos(prev => [
      {
      _id: new Date(),
      title,
      isComplited: false,
      },
      ...prev,
    ])
    setTitle('')
  }

  return(
    <div className='flex items-center justify-between mt-20 mb-4 
    w-full rounded-2xl border-zinc-800 border-2 px-5 py-3'>
      <input type="text" onChange={e => setTitle(e.target.value)}
      value={title}
      onKeyPress={e => e.key === 'Enter' && addTodo(title)}
      className="bg-transparent w-full border-none outline-none"
      placeholder='Add a task'/>
    </div>
  )
}

export default CreateTodoField