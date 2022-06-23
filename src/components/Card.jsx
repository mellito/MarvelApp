import React from "react";

import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    comics: { available },
    name,
    thumbnail: { path, extension },
    id,
    description,
  } = data;

  return (
    <Link to={`/character/${id}`} className="character-card">
      <img src={`${path}/portrait_uncanny.${extension}`} alt={name} />
      <section>
        <p className=" font-24 font-bold">{name || data.title}</p>
        <p className="  font-bold">
          {description.length > 0
            ? description
            : "this character has no description"}
        </p>
        <p className=" font-bold">Number of comics where apears {available}</p>
      </section>
    </Link>
  );
};

export default Card;
