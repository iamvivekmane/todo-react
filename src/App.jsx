import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'

import { v4 as uuidv4 } from 'uuid';

function App() {

  // This is for input text
  const [todo, setTodo] = useState("")

  //This is the array of todo's
  const [todos, setTodos] = useState([])


  const handleEdit = () => {

  }



  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(newTodos)
  }


  // const handleAdd = () => {
  //   setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
  //   setTodo("")

  // }

  // const handleChange = (e) => {
  //   setTodo(e.target.value)
  // }

  // const handleCheckbox = (e) => {
  //   let id = e.target.name
  //   let index = todos.findIndex(item => {
  //     return item.id == id;
  //   })
  //   let newTodos = [...todos];
  //   newTodos[index].isCompleted = !newTodos[index].isCompleted
  //   setTodos(newTodos)
  // }


  // Updated code
    const handleAdd= ()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("") 
    saveToLS()
  }
  
  const handleChange= (e)=>{ 
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => { 
    let id = e.target.name;  
    let index = todos.findIndex(item=>{
      return item.id === id;
    }) 
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-1/2 bg-white' />



          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-6 text-sm font-bold'>Add</button>

        </div>
        <h2 className='text-lg font-bold bf'>Your Todos</h2>
        <div className="todos">
          {todos.map(item => {


            return <div key={item.id} className="todo flex w-1/4 my-3 justify-between">


              <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} id="" />
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              <div className="buttons">
                <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-1 text-sm font-bold'>Edit</button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-1 text-sm font-bold'>Delete</button>
              </div>
            </div>
          })}
        </div>

      </div>

    </>
  )
}

export default App
