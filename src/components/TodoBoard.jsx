import { useEffect, useState } from "react";
import {
  loadDataStorage,
  saveDataStorage,
  deleteDataStorageItem,
} from "../utils/storageManager";
import { boards } from "../utils/taskBoard";
import { DndContext } from "@dnd-kit/core";

// Import components
import TodoCard from "./TodoCard";
import AddTaskModal from "./AddTaskModal";

// import { TodoColumns } from "./TodoColumns";

const TodoBoard = () => {
  const [dataStorage, setDataStorage] = useState([]);
  for (const key in boards) {
    const board = boards[key];
    console.log(`${key}:`, board.columnName, board.bg);
  }

  const addTodo = (title, description) => {
    // console.log(title, description);
    const newTodo = {
      id: Date.now(),
      title: title,
      description: description,
      status: "backlog",
    };
    saveDataStorage([...dataStorage, newTodo]);
    setDataStorage(loadDataStorage());
  };

  const handlerDelete = (id) => {
    deleteDataStorageItem(id);
    setDataStorage(loadDataStorage());
  };

  useEffect(() => {
    setDataStorage(loadDataStorage());
  }, []);

  return (
    <DndContext>
      <section className="flex justify-center items-start w-screen pl-32 pr-10 pt-10 gap-4">
        <div className="absolute top-10 left-2">
          <AddTaskModal addTodo={addTodo} />
        </div>

        {/* <TodoColumns
        tasks={dataStorage}
        handlerDelete={handlerDelete}
        status="backlog"
      />
      <TodoColumns
        tasks={dataStorage}
        handlerDelete={handlerDelete}
        status="pending"
      /> */}

        <div className="shadown-lg bg-gradient-to-b from-gray-700 to-gray-900 rounded-md min-h-[80vh] w-full">
          <div className="bg-red-400 text-center rounded-t-md shadow-lg">
            <h1 className="text-xl font-bold text-black px-2 py-4">
              Brain Strom ⛈️
            </h1>
          </div>
          {dataStorage.map(
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
        <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-md min-h-[80vh] w-full">
          <div className="bg-orange-400 text-center rounded-t-md shadow-lg">
            <h1 className="text-xl font-bold text-black px-2 py-4">
              Pending ⭕
            </h1>
          </div>
          {dataStorage.map(
            (todo) =>
              todo.status === "pending" && (
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
        <div className="min-h-[80vh] w-full bg-gradient-to-b from-gray-700 to-gray-900">
          <div className="bg-blue-500 text-center rounded-t-md shadow-lg">
            <h1 className="text-xl font-bold text-black px-2 py-4">
              Progress 🚧
            </h1>
          </div>
          {dataStorage.map(
            (todo) =>
              todo.status === "progress" && (
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
        <div className="min-h-[80vh] w-full bg-gradient-to-b from-gray-700 to-gray-900">
          <div className="bg-green-300 text-center rounded-t-md shadow-lg">
            <h1 className="text-xl font-bold text-black px-2 py-4">
              Finish 👍
            </h1>
          </div>
          {dataStorage.map(
            (todo) =>
              todo.status === "finish" && (
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
      </section>
    </DndContext>
  );
};

export default TodoBoard;
