import { Input, Button, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { useTaskStore } from "../store/taskStore";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
const FormTask = (props) => {
  // Destructuring
  // eslint-disable-next-line react/prop-types
  const { onClose, usage } = props;
  const { id } = useParams();
  const tasks = useTaskStore((state) => state.tasks);
  const task = tasks.find((task) => task.id === id);
  const addTask = useTaskStore((state) => state.addTask);
  const saveSubtask = useTaskStore((state) => state.saveSubtask);
  const [blankTask, setblankTask] = useState({
    title: "",
    description: "",
    status: "backlog",
    dateEnd: "2024-03-20T00:00:00.000Z",
    subTasks: [],
    comments: [],
    id: v4(),
  });

  // Handlers
  const handlerSubmit = (e) => {
    e.preventDefault();
    usage === "task" ? addTask(blankTask) : saveSubtask(task.id, blankTask);
  };

  return (
    <>
      <form onSubmit={handlerSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          label="Task title"
          onChange={(e) =>
            setblankTask({ ...blankTask, title: e.target.value })
          }
        />
        <Textarea
          onChange={(e) =>
            setblankTask({ ...blankTask, description: e.target.value })
          }
          label="Description"
          placeholder="Enter Task description"
        />
        <Button type="submit" onPress={onClose}>
          Add
        </Button>
      </form>
    </>
  );
};

export default FormTask;
