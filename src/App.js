import React, { useState } from "react";
import { nanoid } from "nanoid";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/todo"





function App(props) {
  
  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks.map((task) => (
    <Todo 
      id={task.id} 
      name={task.name} 
      key={task.id}
      deleteTask={deleteTask}
      editTask={editTask}
      />
    ));

    function addTask(name) {
      const newTask = { id: `todo-${nanoid()}`, name, completed: false };
      setTasks([...tasks, newTask]);
    }

    function deleteTask(id) {
      const remainingTasks = tasks.filter((task) => id !== task.id);
      setTasks(remainingTasks);
    }

    function editTask(id, newName) {
      const editedTaskList = tasks.map((task) =>{
        if (id === task.id) {
          return {...task, name: newName}
        }
        return task;
      });
      setTasks(editedTaskList);
    }

  return (
    <div className="todoapp stack-large">
      <h1>Todo List</h1>
      <Form addTask={addTask} />
      
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App
