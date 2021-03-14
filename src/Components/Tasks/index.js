import IndividualTask from "../IndividualTask";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <IndividualTask
          key={index}
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
