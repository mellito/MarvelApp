import React from "react";

import { Link } from "react-router-dom";

const Card = ({ data, type, linkdirection }) => {
  return (
    <Link to={linkdirection} className="card">
      <img
        src={`${data.thumbnail.path}/portrait_uncanny.${data.thumbnail.extension}`}
        alt={data.name || data.title}
      />
      <section>
        <p className=" font-24 font-bold">{data.name || data.title}</p>
        <p className="  font-bold">
          {data.description
            ? data.description.slice(0, 200)
            : " has not description available"}
        </p>
        {type === "character" && (
          <p className=" font-bold">
            Number of comics where apears {data.comics.available}
          </p>
        )}
      </section>
    </Link>
  );
};

export default Card;
