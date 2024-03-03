import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const FormTask = (prtops) => {
  // Destructuring
  const { addTodo } = prtops;
  // States
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  // Handlers
  const handlerSubmit = (e) => {
    e.preventDefault();
    addTodo(title, description);
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
        <Button type="submit">Add</Button>
      </form>
    </>
  );
};

export default FormTask;
