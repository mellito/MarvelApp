import React from "react";
import { useEffect, useState } from "react";
import { fetchData } from "./utils/fechdata";

const card = ({ data }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fechCharacter = async () => {
      const data = await fetchData(
        "http://gateway.marvel.com/v1/public/characters/1010672",
      );
    };
    fechCharacter();
  }, []);

  return <div>card</div>;
};

export default card;
