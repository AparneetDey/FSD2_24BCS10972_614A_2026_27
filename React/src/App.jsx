import { use, useEffect, useReducer, useRef, useState } from "react";
import { useMoney } from "./context/MoneyContext"
import { Route, Routes, Link, useParams } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Todo from "./components/Todo";

const App = () => {

  return (
    <main className="flex justify-center items-center h-full">
      <Todo />
    </main>
  )
}

export default App