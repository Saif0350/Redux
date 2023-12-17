import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./App.css";

const App = () => {
  return (
    <>
      <div className=" font-medium text-[29px] flex justify-center items-center">
        Hello Saif
      </div>
      <AddTodo />
      <Todos />
    </>
  );
};

export default App;
