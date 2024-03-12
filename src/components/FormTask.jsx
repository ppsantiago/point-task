import { Input, Button, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { useTaskStore } from "../store/taskStore";
const FormTask = (props) => {
  // Destructuring
  // eslint-disable-next-line react/prop-types
  const { onClose } = props;
  const addTask = useTaskStore((state) => state.addTask);
  const [blackTask, setBlackTask] = useState({
    title: "",
    description: "",
    status: "backlog",
    dateEnd: [],
    subTasks: [
      {
        title: "",
        description: "",
        status: "backlog",
        dateEnd: [],
        subTasks: [],
      },
    ],
  });

  // States
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  // Handlers
  const handlerSubmit = (e) => {
    blackTask.title = title;
    blackTask.description = description;
    // console.log(blackTask);
    e.preventDefault();
    addTask(blackTask);
  };

  return (
    <>
      <form onSubmit={handlerSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          label="Task title"
          onChange={(e) => settitle(e.target.value)}
        />
        <Textarea
          onChange={(e) => setdescription(e.target.value)}
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
