import React from "react";
import { NavLink } from "react-router-dom";
import "./About.css";

const about = () => {
  return (
    <section className="About">
      <div className="About__container">
        <h1 className="About__container-header">What is Yards & Gods?</h1>
        <p className="About__container-paragraph">
          Yards & Gods is a multimedia studio. While the primary focus is music
          (recording, mixing, mastering), I also work on film audio, video
          editing, animation, and 3D modeling.
        </p>
        <p className="About__container-paragraph">
          Yards & Gods was also a mixed-media collective based in Columbia, MO
          from 2006-2013. We released dozens of records, a zine, screen prints,
          etc. Yards & Gods (the collective) still lives on in spirit, as many
          of the same talents can be heard on the records recorded here.
        </p>
        <h1 className="About__container-header">About the Engineer</h1>
        <p className="About__container-paragraph">
          My name is <a href="http://zachbiri.com" target="_blank" rel="noopener noreferrer">Zach Biri</a>. I am a/an: audio engineer, musician, web
          developer, audiophile, technophile, cat enthusiast, video editor,
          animator, trekkie, etc… I have been recording music and engineering
          live sound for over half of my life. I operate a modest digital
          recording studio in my home for reasonable rates (inquire {" "}
          <NavLink to="./contact/">&rarr;here</NavLink>).
        </p>
      </div>
    </section>
  );
};

export default about;
