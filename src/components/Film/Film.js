import React from "react";
import "./Film.css";
const film = props => {
  return (
    <a href={props.link} target="_blank" className="Film__link">
      <div className="Film">
        <img
          alt={props.name + " (" + props.year + ")"}
          className="Film__cover"
          src={props.img}
        />
        <div className="Film__info">
          <h1 className="Film__header">
            {props.name} ({props.year})
          </h1>
          <p className="Film__paragraph">{props.credits}</p>
        </div>
      </div>
    </a>
  );
};
export default film;
