import React, { useState, useEffect } from "react";
import "./skills.css";
import SkillBox from "./SkillBox";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Skills = () => {
  const [skillsets, setSkillSets] = useState([]);

  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(db, "skillsets"));
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setSkillSets(newData);
    console.log(newData);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">What you see is what you get</span>

      <div className="skills__container container grid">
        <SkillBox skillSetName="Frontend" skills={["HTML", "CSS"]} />
      </div>
    </section>
  );
};

export default Skills;
