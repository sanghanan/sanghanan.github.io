import React from "react";
import "./work.css";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className="short">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore aperiam ex hic, cupiditate odit amet et! Eum, in eligendi.
      </p>
      <a href="#" className="work__button">
        Demo
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
