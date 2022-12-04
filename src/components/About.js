import React from "react";

function About(props) {
  return (
    <aside>
      <img src={props.image} placeholder="default value" alt={props.image} />
      <p>{props.about}</p>
    </aside>
  );
}

export default About;
