import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  ButtonGroup,
} from "@nextui-org/react";

import { useTaskStore } from "../store/taskStore";

const TodoCard = (task) => {
  const { title, description, id, status } = task;
  const statuses = ["backlog", "pending", "progress", "finish"];
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const changeColumnTask = useTaskStore((state) => state.changeColumnTask);
  return (
    <article
      className={
        "bg-gradient-to-b to-[#141414] from-gray-950 shadow-lg rounded-md w-full py-2 px-4 "
      }
    >
      <div className="flex justify-center items-center">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="p-4">
        <p className="text-pretty">{description}</p>
      </div>
      <div className="flex justify-around items-center">
        <Dropdown className="bg-black text-white">
          <DropdownTrigger>
            <Button variant="bordered">{status}</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {statuses.map((s) =>
              status === s ? null : (
                <DropdownItem onClick={() => changeColumnTask(id, s)} key={s}>
                  {s}
                </DropdownItem>
              )
            )}
          </DropdownMenu>
        </Dropdown>
        <ButtonGroup>
          <Button size="sm" onClick={() => console.log("editin")}>
            Edit
          </Button>
          <Button size="sm" onClick={() => deleteTask(id)} color="danger">
            Delete
          </Button>
        </ButtonGroup>
      </div>
    </article>
  );
};

export default TodoCard;
