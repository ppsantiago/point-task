import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 } from "uuid";

export const useTaskStore = create(
  persist(
    //
    (set, get) => ({
      tasks: [],
      task: [],
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
      addTask: (task) => {
        const newTask = { ...task, status: "backlog", id: v4() };
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
        console.log(id, status);
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status: status } : task
          ),
        }));
      },
      // Pendiente
      exportTasks: () => {
        const tasksJSON = JSON.stringify(get().tasks);
        const blob = new Blob([tasksJSON], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "tasks.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      },
      findOneTask: (id) => {
        set((state) => ({
          task: state.tasks.find((task) => task.id === id),
        }));
      },
    }),
    {
      name: "tasks-storage",
    }
    //
  )
);
