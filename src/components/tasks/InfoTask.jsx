import { useState } from "react";
import { useTaskStore } from "../../store/taskStore";
import {
  Textarea,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Link, useParams } from "react-router-dom";

const InfoTask = () => {
  const { id } = useParams();
  const tasks = useTaskStore((state) => state.tasks);
  const task = tasks.find((task) => task.id === id);
  const statuses = useTaskStore((state) => state.statuses);
  const statusColor = useTaskStore((state) => state.statusColor);
  const saveTask = useTaskStore((state) => state.saveTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const changeColumnTask = useTaskStore((state) => state.changeColumnTask);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const handlerSave = () => {
    saveTask(task);
    setIsReadOnly(true);
  };

  return (
    <div className="flex flex-col w-[40%] rounded-t-lg overflow-hidden min-h-[40vh] justify-between ">
      <section className={`${statusColor[task?.status]} w-full`}>
        <h3 className="text-2xl text-black font-semibold px-4 py-2">
          {task?.title}
        </h3>
      </section>
      <section className="px-4  ">
        <Textarea
          defaultValue={task?.description}
          variant="underlined"
          label="Description"
          labelPlacement="inside"
          minRows={40}
          isReadOnly={isReadOnly}
          onChange={(e) => (task.description = e.target.value)}
        />
      </section>

      <section className=" flex justify-between px-6 ">
        <Dropdown className="bg-black text-white" backdrop="blur">
          <DropdownTrigger>
            <Button variant="bordered">{task.status}</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {statuses.map((s) =>
              task.status === s ? null : (
                <DropdownItem
                  onClick={() => changeColumnTask(task.id, s)}
                  key={s}
                >
                  {s}
                </DropdownItem>
              )
            )}
          </DropdownMenu>
        </Dropdown>
        <ButtonGroup>
          {!isReadOnly ? (
            <Button
              size="sm"
              color="success"
              className=" bg-green-500 text-white "
              onClick={() => {
                saveTask(task), setIsReadOnly(true);
              }}
            >
              Save
            </Button>
          ) : null}
          <Button size="sm" onClick={() => setIsReadOnly(!isReadOnly)}>
            {isReadOnly ? "Edit" : "Cancel"}
          </Button>
          <Button size="sm" color="danger" onClick={() => deleteTask(task.id)}>
            <Link to={"/"}>Delete</Link>
          </Button>
        </ButtonGroup>
      </section>
    </div>
  );
};

export default InfoTask;
