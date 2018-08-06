import React from "react";
import "./Record.css";
const record = props => {
  return (
    <article className="Record">
      <a target="_blank" href={props.link}>
        <div className="Record__side Record__side--front">
          <img
            alt={`${props.artist} - ${props.name}`}
            className="Record__cover"
            src={props.cover}
          />
          <div className="Record__side--front-infobox">
            <h1 className="Record__name">{props.name}</h1>
            <h3 className="Record__artist">by {props.artist}</h3>
            {/* <h3 className="Record__year">{props.year}</h3> */}
          </div>
        </div>
        <div className="Record__side Record__side--back">
          <div className="Record__side--back-infobox">
            <p className="Record__artist">
              {props.name} by {props.artist} ({props.year}) :
            </p>
            <p className="Record__credits">{props.credits}</p>
          </div>
        </div>
      </a>
    </article>
  );
};

export default record;
