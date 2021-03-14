import { useState, useEffect } from "react";

import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";

function App() {
  const [toggleAddTaskDisplay, setToggleAddTaskDisplay] = useState(false);

  const [tasks, setTasks] = useState([]);

  //Fetch Tasks
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();

    return data;
  };

  //Get Tasks
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //Save Task
  const saveTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete tasks
  const delTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        // Spread across & add a new object via setTasks --> setTasks([...tasks, {}])
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setToggleAddTaskDisplay(!toggleAddTaskDisplay)}
        displayAdd={toggleAddTaskDisplay}
      />

      {toggleAddTaskDisplay && <AddTask onAdd={saveTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={delTask} onToggle={toggleReminder} />
      ) : (
        "No Task To Do"
      )}
    </div>
  );
}

export default App;
