import { useState } from "react";
import Nav from "./components/Navbar/Nav";
import Hero from "./components/Hero/Hero";
import Project from "./components/Projects/Project";
import Education from "./components/Education/Education";
import Skill from "./components/Skills/Skill";
import Interest from "./components/Interest/Interest";
import Contact from "./components/Contact/Contact";
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
          <Project />
          <Education />
          <Skill />
          <Interest />
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
      path: "/Interest",
      element: (
        <>
          <Nav />
          <Interest />
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
