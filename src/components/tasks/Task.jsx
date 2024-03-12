import DatesTask from "./datesTask";
import { useParams, Link } from "react-router-dom";
import { useTaskStore } from "../../store/taskStore";
import { useEffect } from "react";
import { v4 } from "uuid";

const Task = () => {
  const { id } = useParams();
  const findOneTask = useTaskStore((state) => state.findOneTask);
  const task = useTaskStore((state) => state.task);
  const statusIcons = useTaskStore((state) => state.statusIcons);
  const statusColor = useTaskStore((state) => state.statusColor);
  useEffect(() => {
    id && findOneTask(id);
  }, [findOneTask, id]);

  return (
    <div className="flex flex-col justify-start h-full items-center pb-20">
      <section className="flex justify-start pl-2 items-center h-14 bg-gray-600 w-full">
        <Link
          className="bg-[#141414] px-6 py-2 rounded-lg shadow-xl hover:bg-[#1d1d1d] transition-all duration-300"
          to="/"
        >
          Back
        </Link>
      </section>
      <section className=" w-11/12 pt-10">
        <header
          className={`flex justify-center items-center py-2 rounded-t-lg  ${
            statusColor[task.status]
          }`}
        >
          <p className="text-5xl">{statusIcons[task.status]}</p>
        </header>
        <main className="border-2 border-gray-600 rounded-b-lg h-full px-6 py-4">
          <article className="py-4">
            <h1 className="text-7xl font-semibold">Task - {task.title}</h1>
          </article>
          <p>{task.description}</p>
          <DatesTask />
          <div className="flex flex-col bg-gray-600 justify-center  w-full gap-4 py-6">
            <h3 className="text-3xl font-semibold">subtareas</h3>
            {task.subTasks?.map((subtask) => (
              <div key={v4()}>
                <p>{subtask["title"]}</p>
                <p>{subtask["description"]}</p>
                <p>{subtask["status"]}</p>
                {subtask["dateEnd"]?.map((date) => (
                  <div key={v4()}>
                    <p className="text-2xl font-semibold">sub sub tarea</p>
                    <p>{date[1]}</p>
                    <p>{date[0]}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p>{task.status}</p>
        </main>
      </section>
    </div>
  );
};

export default Task;
