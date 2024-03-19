import { useTaskStore } from "../store/taskStore";
// Import components
import TodoCard from "./TodoCard";
import AddTaskModal from "./AddTaskModal";

const TodoBoard = () => {
  const Tasks = useTaskStore((state) => state.tasks);
  return (
    <section className="flex flex-col md:flex-row justify-center items-start w-screen px-6 md:pl-32 md:pr-10 md:pt-10 gap-4">
      <div className=" hidden md:block md:absolute md:pt-0 md:top-10 left-2">
        <div className="flex flex-col gap-5">
          <AddTaskModal usage="task" />
          {/* <AddTaskModal title="Add Task whit IA" /> */}
        </div>
      </div>
      <div
        id="backlog"
        className={`shadown-lg bg-gradient-to-b from-gray-700 to-gray-900 rounded-md md:min-h-[80vh] w-full `}
      >
        <div className="bg-red-300 text-center rounded-t-md shadow-lg">
          <h1 className="text-xl font-bold text-black px-2 py-4">
            Brain Strom ⛈️
          </h1>
        </div>
        {Tasks &&
          Tasks.map(
            (todo) =>
              todo.status === "backlog" && (
                <div className="p-2" key={todo.id}>
                  <TodoCard
                    title={todo.title}
                    description={todo.description}
                    id={todo.id}
                    status={todo.status}
                  />
                </div>
              )
          )}
      </div>
      <div
        id="pending"
        className={`shadown-lg bg-gradient-to-b from-gray-700 to-gray-900 rounded-md md:min-h-[80vh] w-full `}
      >
        <div className="bg-orange-300 text-center rounded-t-md shadow-lg">
          <h1 className="text-xl font-bold text-black px-2 py-4">Pending ⭕</h1>
        </div>
        {Tasks &&
          Tasks.map(
            (todo) =>
              todo.status === "pending" && (
                <div className="p-2" key={todo.id}>
                  <TodoCard
                    title={todo.title}
                    description={todo.description}
                    id={todo.id}
                    status={todo.status}
                  />
                </div>
              )
          )}
      </div>
      <div
        id="progress"
        className={`shadown-lg bg-gradient-to-b from-gray-700 to-gray-900 rounded-md h-full md:min-h-[80vh] w-full `}
      >
        <div className="bg-blue-500 text-center rounded-t-md shadow-lg">
          <h1 className="text-xl font-bold text-black px-2 py-4">
            Progress 🚧
          </h1>
        </div>
        {Tasks &&
          Tasks.map(
            (todo) =>
              todo.status === "progress" && (
                <div className="p-2" key={todo.id}>
                  <TodoCard
                    title={todo.title}
                    description={todo.description}
                    id={todo.id}
                    status={todo.status}
                  />
                </div>
              )
          )}
      </div>
      <div
        id="finish"
        className={`shadown-lg bg-gradient-to-b from-gray-700 to-gray-900 rounded-md md:min-h-[80vh] w-full `}
      >
        <div className="bg-green-300 text-center rounded-t-md shadow-lg">
          <h1 className="text-xl font-bold text-black px-2 py-4">Finish 👍</h1>
        </div>
        {Tasks &&
          Tasks.map(
            (todo) =>
              todo.status === "finish" && (
                <div className="p-2" key={todo.id}>
                  <TodoCard
                    title={todo.title}
                    description={todo.description}
                    id={todo.id}
                    status={todo.status}
                  />
                </div>
              )
          )}
      </div>
    </section>
  );
};

export default TodoBoard;
