import React from "react";
import "./Contact.css";
const contact = () => {
  return (
    <section className="Contact">
      <div className="Contact__container">
        <h1 className="Contact__container-header">Contact me!</h1>
        <p className="Contact__container-paragraph">
          Interested in working with me? Would you like to ask about rates, or if I'm taking new projects?  Would you like to ask about my equipment or my process?  Maybe you'd just like to pick my brain about something related to audio...  You've got a few options:
        </p>
        <ul className="Contact__container-ul">
          <li className="Contact__bttn">
            <a href="mailto:yardsandgods@gmail.com"><i className="fas fa-envelope" /> E-mail</a>
          </li>
          <li className="Contact__bttn">
            <a href="https://m.me/yardsandgods"><i className="fab fa-facebook-messenger" /> Messenger</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default contact;
