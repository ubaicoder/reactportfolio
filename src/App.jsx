import { useState } from "react";
import Nav from "./components/Navbar/Nav";
import Hero from "./components/Hero/Hero";
import Project from "./components/Projects/Project";
import Education from "./components/Education/Education";
import Skill from "./components/Skills/Skill";
import Contact from "./components/Contact/Contact";
import About from "./components/AboutMe/About";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />
          <Hero />
          <About />
          <Project />
          <Education />
          <Skill />

          <Contact />
        </>
      ),
    },
    {
      path: "/Projects",
      element: (
        <>
          <Nav />
          <Project />
        </>
      ),
    },
    {
      path: "/AboutMe",
      element: (
        <>
          <Nav />
          <About />
        </>
      ),
    },
    {
      path: "/Education",
      element: (
        <>
          <Nav />
          <Education />
        </>
      ),
    },
    {
      path: "/Skills",
      element: (
        <>
          <Nav />
          <Skill />
        </>
      ),
    },

    {
      path: "/Contact",
      element: (
        <>
          <Nav />
          <Contact />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
