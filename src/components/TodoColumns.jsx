import TodoCard from "./TodoCard";
export const TodoColumns = (props) => {
  const { tasks, handlerDelete } = props;

  return (
    <div className="shadown-lg bg-gradient-to-b from-gray-700 to-gray-900 rounded-md min-h-[80vh] w-full">
      <div className="bg-red-400 text-center rounded-t-md shadow-lg">
        <h1 className="text-xl font-bold text-black px-2 py-4">
          Brain Strom ⛈️
        </h1>
      </div>
      {tasks.map(
        (todo) =>
          todo.status === "backlog" && (
            <div className="p-2" key={todo.id}>
              <TodoCard
                title={todo.title}
                description={todo.description}
                id={todo.id}
                status={todo.status}
                handlerDelete={handlerDelete}
              />
            </div>
          )
      )}
    </div>
  );
};
