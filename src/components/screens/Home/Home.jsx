import React, { useState } from "react"
import Todoitem from "./item/Todoitem";
import CreateTodoField from "./Create-todo-field/CreateTodoField";

const data = [
  {
    _id: 'sadasd',
    title: 'Закончить приложение',
    isComplited: false,
  },
  {
    _id: 'sadasd1',
    title: 'Прочитать книгу',
    isComplited: false,
  },
  {
    _id: 'sadasd2',
    title: 'Сделать хоть что-нибудь',
    isComplited: false,
  },
]

const Home = () => {
  const [todos, setTodos] = useState(data)

  const changeTodo = (id) => {
    const copy = [...todos]
    const current = copy.find(t => t._id === id)
    current.isComplited = !current.isComplited
    setTodos(copy)
  }

  const removeTodo = id => {
    setTodos([...todos].filter(t => t._id !== id))
  }

  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="font-bold text-2xl text-center mb-8">Todo for Junior</h1>
      {todos.map(todo => (
        <Todoitem 
          key={todo._id} 
          todo={todo} 
          changeTodo={changeTodo}
          removeTodo={removeTodo}/>
      ))}
      <CreateTodoField setTodos={setTodos}/>
    </div>
  )
}

export default Home;