import { useTaskStore } from "../../store/taskStore";
import { v4 } from "uuid";

import { format } from "date-format";

const DatesTask = () => {
  const task = useTaskStore((state) => state.task);

  return (
    <div className="flex flex-col bg-gray-600 justify-center  w-full gap-4 py-6">
      <h3 className="text-3xl font-semibold">Fechas limites</h3>
      {task.dateEnd.map((date) => (
        <div key={v4()}>
          <p>{date[1]}</p>
          <p>{new Date(date[0]).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default DatesTask;
