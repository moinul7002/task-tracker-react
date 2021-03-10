import { useState } from "react";

import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Office",
      day: "Mar 09 at 5:45pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Football",
      day: "Mar 10 at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Movies",
      day: "Mar 11 at 5:30pm",
      reminder: false,
    },
  ]);

  //Delete tasks
  const delTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
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

      <AddTask />
    </div>
  );
}

export default App;
