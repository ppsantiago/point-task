import { useTaskStore } from "../store/taskStore";

const AppTest = () => {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div className="w-full  flex flex-col justify-center items-center gap-y-5">
      {tasks.map((task) => (
        <div key={task.id} className="bg-slate-500">
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AppTest;
