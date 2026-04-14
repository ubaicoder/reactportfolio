import "./Education.css";
import { motion } from "framer-motion";

function Education() {
  return (
    <div className="container edu px-4 py-5">
      <h2 className="text-center education-title">Education</h2>

      <div className="row g-4 py-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
        {/* SCHOOL */}
        <motion.div
          className="col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="edu-card">
            <img src="./book.svg" alt="book" className="edu-icon" />
            <h3>Schooling</h3>
            <p>Completed SSC from St. Mary's High School, Mazagon.</p>
          </div>
        </motion.div>

        {/* JUNIOR COLLEGE */}
        <motion.div
          className="col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="edu-card">
            <img src="./book.svg" alt="book" className="edu-icon" />
            <h3>Junior College</h3>
            <p>
              Completed 11th and 12th (Science stream) from Jai Hind College,
              Churchgate.
            </p>
          </div>
        </motion.div>

        {/* UG */}
        <motion.div
          className="col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="edu-card">
            <img src="./book.svg" alt="book" className="edu-icon" />
            <h3>Under Graduation</h3>
            <p>
              Pursuing B.Tech in Information Technology from Shah & Anchor
              Kutchhi Engineering College, Chembur.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
