import { useEffect, useState } from "react";
import { fetchData } from "./utils/fechdata";
import MainRoute from "./components/MainRoute";
function App() {
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

  return <MainRoute />;
}

export default App;
