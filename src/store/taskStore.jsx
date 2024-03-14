import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTaskStore = create(
  persist(
    //
    (set, get) => ({
      // Tasks
      tasks: [],
      // Constantes
      statuses: ["backlog", "pending", "progress", "finish"],
      statusIcons: {
        backlog: "⛈️",
        pending: "⭕",
        progress: "🚧",
        finish: "👍",
      },
      statusColor: {
        backlog: "bg-red-300",
        pending: "bg-orange-300",
        progress: "bg-blue-300",
        finish: "bg-green-300",
      },
      // Funciones
      addTask: (task) => {
        const newTask = { ...task, status: "backlog" };
        set((state) => ({
          tasks: [...state.tasks, newTask],
        }));
      },
      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }));
      },
      changeColumnTask: (id, status) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status: status } : task
          ),
        }));
      },
      saveTask: (task) => {
        set((state) => ({
          tasks: state.tasks.map((t) => (t.id === task.id ? task : t)),
        }));
      },
      saveSubtask: (taskID, subtask) => {
        console.log("subTask", subtask);
        console.log("taskID", taskID);

        const task = get().tasks.find((task) => task.id === taskID);
        console.log(task);
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === taskID ? { ...t, subTasks: [...t.subTasks, subtask] } : t
          ),
        }));
      },
      // Change status subtask
      changeStatusSubtask: (taskID, subtaskID, subtasks, status) => {
        set((state) => ({
          tasks: state.tasks.map((task) => {
            if (task.id === taskID) {
              return {
                ...task,
                subTasks: task.subTasks.map((subtask) =>
                  subtask.id === subtaskID
                    ? { ...subtask, status: status }
                    : subtask
                ),
              };
            } else {
              return task;
            }
          }),
        }));
      },
      deleteSubtask: (taskID, subtaskID) => {
        set((state) => ({
          tasks: state.tasks.map((task) => {
            if (task.id === taskID) {
              return {
                ...task,
                subTasks: task.subTasks.filter(
                  (subtask) => subtask.id !== subtaskID
                ),
              };
            } else {
              return task;
            }
          }),
        }));
      },
    }),
    {
      name: "tasks-storage",
    }
    //
  )
);
