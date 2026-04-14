import "./Hero.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container hero-section">
      <div className="row">

        {/* IMAGE */}
        <motion.div
          className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            className="pics img-fluid"
            src="./first (1).png"
            alt="profile-pic"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="col-md-6 col-sm-12 hero-text d-flex flex-column justify-content-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h5>Hey, I am</h5>
          <h1 className="nameP">Ubai 👋</h1>
          <h2>Frontend Developer</h2>

          <p className="about-text">
            I build modern, responsive web applications using React and JavaScript.
          </p>

          <Link to="/Projects" className="hero-btn">
            View Projects
          </Link>
        </motion.div>

      </div>
    </div>
  );
}

export default Hero;
/*
======================== FRAMER MOTION NOTES ========================

Framer Motion is used to add animations in React easily.

Basic Usage:
Replace normal div with motion.div

import { motion } from "framer-motion";

<motion.div> ... </motion.div>


-------------------- CORE CONCEPT --------------------

Every animation has 3 parts:

1. initial → starting state (before animation)
2. animate / whileInView → final state
3. transition → how animation happens (speed, timing)


-------------------- EXAMPLE --------------------

<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>

Explanation:
opacity: 0 → invisible
x: -50 → start from left

opacity: 1 → visible
x: 0 → normal position

duration: 0.6 → animation time


-------------------- IMPORTANT --------------------

animate → runs immediately when component loads

whileInView → runs when element comes into view (on scroll)

Example:

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>


-------------------- COMMON ANIMATIONS --------------------

Slide from left:
initial={{ x: -50, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}

Slide from right:
initial={{ x: 50, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}

Fade in:
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}

Zoom effect:
initial={{ scale: 0.8, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}


-------------------- WHEN TO USE --------------------

Hero Section → use animate (loads immediately)

About / Projects / Skills → use whileInView (on scroll)


-------------------- QUICK REMEMBER --------------------

initial = where it starts
animate / whileInView = where it ends
transition = how fast it moves


-------------------- BEST PRACTICE --------------------

- Keep animations smooth and simple
- Do NOT overuse animations
- Use same style across all sections

====================================================================
*/