import React, { useState } from "react";

function App() {
 const [todos, setTodos] = useState([]);
 const [newTodo, setNewTodo] = useState("");

 const handleAddTodo = () => {
   setTodos([...todos, newTodo]);
   setNewTodo("");
 };

 const handleRemoveTodo = (index) => {
   setTodos(todos.filter((_, i) => i !== index));
 };

 return (
   <div>
     <p>To-Do List:</p>
     <ul>
       {todos.map((todo, index) => (
         <li key={index}>
           {todo}
           <button onClick={() => handleRemoveTodo(index)}>x</button>
         </li>
       ))}
     </ul>
     <input
       type="text"
       value={newTodo}
       onChange={(e) => setNewTodo(e.target.value)}
     />
     <button onClick={handleAddTodo}>Add Todo</button>
   </div>
 );
}

export default App;

