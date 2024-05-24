import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/Addtodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Todo App using React Redux
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
