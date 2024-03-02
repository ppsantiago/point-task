import TodoCard from "./TodoCard";

const TodoBoard = () => {
  return (
    <section className="flex justify-center items-center w-3/4 gap-2">
      <div className="border-2 rounded-md min-h-[80vh] w-full">
        <div className="bg-red-400 text-center">
          <h1 className="text-xl font-bold text-black px-2 py-4">
            Brain Strom 🧠
          </h1>
        </div>
        <div className="p-4">
          <TodoCard />
        </div>
      </div>
      <div className="border-2 rounded-md min-h-[80vh] w-full">
        <div className="bg-orange-400 text-center">
          <h1 className="text-xl font-bold text-black px-2 py-4">Pending ⭕</h1>
        </div>
        <div className="p-4">
          <TodoCard />
        </div>
      </div>
      <div className="border-2 rounded-md min-h-[80vh] w-full">
        <div className="bg-blue-500 text-center">
          <h1 className="text-xl font-bold text-black px-2 py-4">
            Progress 🚧
          </h1>
        </div>
        <div className="p-4">
          <TodoCard />
        </div>
      </div>
      <div className="border-2 rounded-md min-h-[80vh] w-full">
        <div className="bg-green-300 text-center">
          <h1 className="text-xl font-bold text-black px-2 py-4">Finish 👍</h1>
        </div>
        <div className="p-4">
          <TodoCard />
        </div>
      </div>
    </section>
  );
};

export default TodoBoard;
