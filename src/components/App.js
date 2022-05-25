import './App.css';
import TodoForm from './TodoForm';
import AllTodos from './AllTodos'

import React, {useState} from 'react'

const App = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(editId) {
      const editTodos = todos.find((i) => i.id === editId )
      const updateTodos = todos.map((t) => 
        t.id === editTodos.id ? 
        (t = {id:t.id,todo}) : 
        ({id : t.id, todo : t.todo})
      );
      setTodos(updateTodos);
      setTodo("");
      setEditId(0);
      return;
    }
    
    if(todo !== ''){
      setTodos([{id: `${todo} - ${Date.now()}`,todo},...todos]);
      setTodo("");
    }
  }

  const handleEdit = (id) => {
    const editTodo = todos.find((d) => d.id === id);
    setTodo(editTodo.todo);
    setEditId(id); 
  }

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  }

  return (
    <div className="App">
      <div className="container">
      <h1>Todo List App</h1>
      <TodoForm handleSubmit = {handleSubmit} todo = {todo} setTodo = {setTodo} editId = {editId} />
      <AllTodos todos = {todos} handleEdit = {handleEdit} handleDelete = {handleDelete} />

      </div>
    </div>
  )
}

// const App = () => {
//   const arr  = [
  
//   {
//     id:1,
//     name:"Alex",
//   },

//   {
//     id:2,
//     name:"Mathew",
//   },
  
// ]
//   return (
//     <div className='App'>
//       {
//       arr.map((num) => {
//         return <div key={num.id}>{num.name} </div>
//       })
//       }
//     </div>
//   )
// }


//Filter
// const App = () => {
//   const arr = [1,2,3,4,5]
//   return(
//     <div className='App'>
//       {
//         arr.filter((num)=>(
//           num!==3
//         ))
//       }
//     </div>
//   )
// }

//Map
// const App = () => {
//   const arr = [1,2,3,4,5]
//   return(
//     <div className="App">
//       {
//         arr.map ((num) => (
//             <div>
//               {num} , 
//             </div>
//         )
//         )
//       } 
//     </div>
//   );
// }


// const App = () => {
//   const [name, setName] = useState('hello');
//   return (  
//     <div>
//     <MainInput setName={setName}/>
//     <PrimaryBtn fullname={name} />
//     {name==="Go"?<PrimaryBtn fullname="Go" />:<PrimaryBtn fullname="Submit" />}
//     </div>
//   );
// }

export default App;
