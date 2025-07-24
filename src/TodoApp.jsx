import React, { useState } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Add a new task
  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
      }
    else {
        alert("Enter a valid input !!!!");
      }
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };


  return (
    <div className="todo-app">
      <div className="todo-container">
        <h1>To-Do List</h1>

        
        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            className="task-input"
          />
          <button onClick={addTask} className="add-btn">
            Add Task
          </button>
        </div>

        
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="no-tasks">No tasks yet. Add one above!</p>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className={`task-item ${task.completed ? "completed" : ""}`}>
                <div className="task-content">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    className="task-checkbox"
                  />
                  <span className="task-text">{task.text}</span>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="delete-btn">
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default TodoApp;
