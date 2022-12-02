import React from "react"
import Todoitem from "./Todoitem";

const todos = [
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
  return (
    <div className="bg-gray-900 h-screen text-white">
      {todos.map(todo => (
        <Todoitem key={todo._id} todo={todo}/>
        
      ))}
    </div>
  )
}

export default Home;