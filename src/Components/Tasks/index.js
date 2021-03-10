import IndividualTask from "../IndividualTask";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    // Spread across & add a new object via setTasks
    // setTasks([...tasks, {}])
    <>
      {tasks.map((task) => (
        <IndividualTask
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

// Tasks.defaultProps = {.
//   tasks: { tasks },
// };

export default Tasks;
