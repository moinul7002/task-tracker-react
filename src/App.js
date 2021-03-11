import { useState } from "react";

import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";

function App() {
  const [toggleAddTaskDisplay, setToggleAddTaskDisplay] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Office Interview",
      date: "Mar 09",
      time: "5:45pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Football Match",
      date: "Mar 10",
      time: "1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Movies at Cineplex",
      date: "Mar 11",
      time: "5:30pm",
      reminder: false,
    },
  ]);

  //Save Task
  const saveTask = (task) => {
    // console.log(task);
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
      <Header />

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={delTask} onToggle={toggleReminder} />
      ) : (
        "No Task To Do"
      )}

      <AddTask onAdd={saveTask} />
    </div>
  );
}

export default App;
