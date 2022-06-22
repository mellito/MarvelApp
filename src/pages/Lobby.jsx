import { useEffect, useState } from "react";
import { fetchData } from "./utils/fetchdata";

const Lobby = () => {
  const [marvelData, setMarvelData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchData(
        "http://gateway.marvel.com/v1/public/characters?",
      );
      console.log(data);
      setMarvelData(data.data.results);
    };
    fetchAPI();
  }, []);

  return <div>Lobby</div>;
};

export default Lobby;
