import './App.css';
import React, {useState} from 'react';

function App() {
  const[toDo, setToDo] = useState([
    {name: "Buy shopping", priority: "high"},
    {name: "Clean bathroom", priority: "low"},
    {name: "Cars MOT", priority: "high"},
    {name: "Complete lab", priority: "low"}
    
  ])

  const[newToDo, setNewToDo] = useState("");

  const [currentPriority, setNewCurrentPriority] = useState("");

  const toDoNodes = toDo.map((toDo, index) => {
    
    return (
      <li key={index} className={toDo.priority === "high" ? "high" : "low"}>
        <span>{toDo.name} {toDo.priority}</span>
      </li>
    )

   
  });
  
  const saveNewToDo = (event) => {
    event.preventDefault();
    const newToDoArr = [...toDo];
    newToDoArr.push({name: newToDo, priority: "low"});
    setToDo(newToDoArr);
    setNewToDo("")
  }
  
  const handleInputChange = (event) => {
    setNewToDo(event.target.value)
  }
  
  return (
 <div className="App">
 <h1>To Do list</h1>
  
  <form onSubmit={saveNewToDo}>
    <label htmlFor="new-todo">Add to do</label>
    <input type="text" id="new-to-do" value={newToDo} onChange={handleInputChange}></input>
    <div>
      <input type="radio" name="priority" value="high" /> High
      <input type="radio" name="priority" value="low" /> Low
    </div>
    <input type="submit" value="Save new To do"></input>
  </form>
   
  <ul>
    {toDoNodes}
  </ul>

 </ div>
  )
}

export default App;
