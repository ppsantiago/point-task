import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTaskStore = create(
  persist(
    //
    (set) => ({
      // Tasks
      tasks: [],
      task: [],
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
        console.log("Add task", task);

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
      findOneTask: (id) => {
        set((state) => ({
          task: state.tasks.find((task) => task.id === id),
        }));
      },
      saveTask: (task) => {
        console.log("Save task", task);

        set((state) => ({
          tasks: state.tasks.map((t) => (t.id === task.id ? task : t)),
        }));
      },
      saveSubtask: (taskID, subtask) => {
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === taskID ? { ...t, subTasks: [...t.subTasks, subtask] } : t
          ),
        }));
        set((state) => ({
          task: { ...state.task, subTasks: [...state.task.subTasks, subtask] },
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
        set((state) => ({
          task: state.tasks.find((task) => task.id === taskID),
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
        set((state) => ({
          task: state.tasks.find((task) => task.id === taskID),
        }));
      },
      // Pendiente
      // exportTasks: () => {
      //   const tasksJSON = JSON.stringify(get().tasks);
      //   const blob = new Blob([tasksJSON], { type: "application/json" });
      //   const url = URL.createObjectURL(blob);
      //   const a = document.createElement("a");
      //   a.href = url;
      //   a.download = "tasks.json";
      //   document.body.appendChild(a);
      //   a.click();
      //   document.body.removeChild(a);
      //   URL.revokeObjectURL(url);
      // },
    }),
    {
      name: "tasks-storage",
    }
    //
  )
);
