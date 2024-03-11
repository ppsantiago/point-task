import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTaskStore = create(
  persist(
    //
    (set) => ({
      tasks: [],
      addTask: (task) => {
        const newTask = { ...task, status: "backlog", id: Date.now() };
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
    }),
    {
      name: "tasks-storage",
    }
    //
  )
);
