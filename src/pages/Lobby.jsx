import { useEffect, useState } from "react";
import { fetchData } from "../utils/fechdata";
import NavBar from "../components/NavBar";
const Lobby = () => {
  const [marvelData, setMarvelData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchData(
        "http://gateway.marvel.com/v1/public/characters?",
      );
      setMarvelData(data.data.results);
    };
    fetchAPI();
  }, []);

  return (
    <main className="main lobby">
      <NavBar />
      <p>Lobby</p>
    </main>
  );
};

export default Lobby;
