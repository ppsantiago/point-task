import { useState } from "react";
import { useTaskStore } from "../../store/taskStore";
import {
  // Textarea,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Link, useParams } from "react-router-dom";
import "../../App.css";

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

  const taskDescription = () => {
    return task?.description;
  };

  return (
    <div className="flex flex-col  w-[40%] rounded-t-lg overflow-hidden min-h-[40vh] justify-between ">
      <section
        className={`${statusColor[task?.status]} w-full flex justify-between`}
      >
        <h3 className="text-2xl text-black font-semibold px-4 py-2">
          {task?.title}
        </h3>
        <h3 className="text-2xl text-black font-semibold px-4 py-2">
          {new Date(task?.dateEnd).toLocaleDateString()}
        </h3>
      </section>
      <section className="flex flex-col  h-full pb-4 pt-2 overflow-hidden">
        <textarea
          rows="10"
          defaultValue={taskDescription}
          disabled={isReadOnly}
          onChange={(e) => (task.description = e.target.value)}
          className="h-full px-4 py-2 rounded-b-xl focus:border-0"
        />
        {/* <Textarea
          defaultValue={task?.description}
          // variant="underlined"
          label="Description"
          labelPlacement="inside"
          minRows={10}
          isReadOnly={isReadOnly}
          onChange={(e) => (task.description = e.target.value)}
          className="h-full bg-red-400"
        /> */}
      </section>

      <section className=" flex justify-between px-6 ">
        <Dropdown className="bg-black text-white" backdrop="blur">
          <DropdownTrigger>
            <Button variant="bordered" className="mb-1" size="sm">
              {task.status}
            </Button>
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
        <ButtonGroup className="mb-1">
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
