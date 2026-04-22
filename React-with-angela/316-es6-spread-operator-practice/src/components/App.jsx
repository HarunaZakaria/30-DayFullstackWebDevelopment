import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  function handleTaskChange(event) {
    const newList = event.target.value;
    setTask(newList);
  }
  function addTask() {
    setTasksList((prevTasks) => {
      return [...prevTasks, task];
    });
    setTask("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleTaskChange} value={task} />
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {tasksList.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
