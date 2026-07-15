import { use, useEffect, useReducer, useRef, useState } from "react";
import { Route, Routes, Link, useParams } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Todo from "./components/Todo";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const App = () => {

  return (
    <main>
      <Header />
      <Navigation />
      <About />
      <Project />
      <Experience />
      <Footer />
    </main>
  )
}

export default App