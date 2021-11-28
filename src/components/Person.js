import React from "react";
// import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import placeholder from "../assets/placeholder.png";

function Person({ character, id, name, profile_path }) {
  const { actor_base } = useGlobalContext();
  const img = profile_path ? `${actor_base}${profile_path}` : placeholder;
  return (
    <article className="person">
      <div className="person-image-container">
        <img src={img} alt="person" />
      </div>
      <div className="person-info">
        <h3>{name}</h3>
        <p>({character})</p>
        {/* <Link to={`/person/${id}`} className="btn small-btn btn-primary">
          Learn more
        </Link> */}
      </div>
    </article>
  );
}

export default Person;
