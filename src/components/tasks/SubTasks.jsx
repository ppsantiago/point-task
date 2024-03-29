// import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
  ScrollShadow,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { FiDelete } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { useTaskStore } from "../../store/taskStore";
import { v4 } from "uuid";
import AddTasksModal from "../AddTaskModal";
import { useParams } from "react-router-dom";

const SubTasks = () => {
  // const task = useTaskStore((state) => state.task);
  const { id } = useParams();
  const tasks = useTaskStore((state) => state.tasks);
  const task = tasks.find((task) => task.id === id);
  const deleteSubtask = useTaskStore((state) => state.deleteSubtask);
  const statuses = useTaskStore((state) => state.statuses);
  const statusColor = useTaskStore((state) => state.statusColor);
  const changeStatusSubtask = useTaskStore(
    (state) => state.changeStatusSubtask
  );
  const changeDateSubtask = useTaskStore((state) => state.changeDateSubtask);

  const handlerSubmitDate = (e) => {
    e.preventDefault();
    changeDateSubtask(task.id, e.target[1].value, e.target[0].value);
  };

  return (
    <div className="flex flex-col w-[60%] rounded-t-lg overflow-hidden min-h-[40vh] justify-between ">
      <section className="bg-gray-700 w-full flex justify-between items-center px-4 py-2">
        <h3 className="text-2xl font-semibold ">Subtasks</h3>
        <AddTasksModal usage="subtask" />
      </section>

      <ScrollShadow
        hideScrollBar
        className="flex flex-col gap-y-2 px-4 py-4 h-full overflow-y-auto  max-h-[40vh] items-start "
      >
        {task?.subTasks?.map((subtask) => (
          <div
            className="flex shadow-sm backdrop-blur-md bg-white/10 justify-start items-center gap-4 px-6 rounded-full w-full"
            key={v4()}
          >
            <div
              className={`min-h-3 min-w-3 rounded-full ${
                statusColor[subtask.status]
              }`}
            ></div>
            <div className="w-[35vw] ">
              <h3 className="font-semibold text-md">
                {subtask.title?.substring(0, 15)}
              </h3>
            </div>
            <div className="w-full min-w-40 ">
              <p className="text-sm">{subtask.description?.substring(0, 20)}</p>
            </div>
            <div className="w-full">
              <Dropdown className="bg-black text-white" backdrop="blur">
                <DropdownTrigger>
                  <Button
                    size="sm"
                    variant="bordered"
                    className={` text-black my-1  font-semibold ${
                      statusColor[subtask.status]
                    }`}
                  >
                    {subtask.status}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  {statuses.map((status) =>
                    subtask.status === status ? null : (
                      <DropdownItem
                        onClick={() =>
                          changeStatusSubtask(
                            task.id,
                            subtask.id,
                            task?.subTasks,
                            status
                          )
                        }
                        key={status}
                      >
                        {status}
                      </DropdownItem>
                    )
                  )}
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="w-full flex justify-end pr-8">
              <div className=" w-[50%] font-semibold text-md">
                {subtask.dateEnd ? (
                  <div className="flex items-center justify-between">
                    <Dropdown
                      className="bg-black text-white"
                      backdrop="blur"
                      showArrow
                    >
                      <DropdownTrigger>
                        <div className="">
                          <MdDateRange />
                        </div>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Static Actions"
                        closeOnSelect={false}
                      >
                        <DropdownItem>
                          <form
                            onSubmit={handlerSubmitDate}
                            className="flex flex-col justify-center items-center gap-2"
                          >
                            <input
                              type="date"
                              className="text-black rounded-lg px-4 h-8 bg-gray-200"
                            />
                            <input type="hidden" value={subtask.id} />
                            <Button
                              type="submit"
                              size="sm"
                              color="success"
                              className="w-full"
                            >
                              Apply
                            </Button>
                          </form>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    {new Date(subtask?.dateEnd).toLocaleDateString()}
                  </div>
                ) : (
                  "No data"
                )}
              </div>
            </div>
            <div className="">
              <FiDelete
                className="text-red-500"
                size={22}
                onClick={() => deleteSubtask(task.id, subtask.id)}
              />
            </div>
          </div>
        ))}
      </ScrollShadow>
    </div>
  );
};

export default SubTasks;
