import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Providers
import { NextUIProvider } from "@nextui-org/react";
import Task from "./components/tasks/Task";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <main className="dark text-foreground bg-[#141414] min-h-screen h-auto font-Montserrat ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/task/:id" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </main>
  </NextUIProvider>
);
