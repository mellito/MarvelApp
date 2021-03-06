import { useEffect, useState } from "react";
import { fetchData } from "../utils/fechdata";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import { TailSpin } from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const Lobby = () => {
  const [pages, setPages] = useState(1);
  const [marvelData, setMarvelData] = useState([]);
  const [hastrue, setHasTrue] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchData(
        "https://gateway.marvel.com/v1/public/characters",
        0,
      );

      if (!data.message) {
        setMarvelData(data.data.results);
      } else {
        setError(data.message);
      }
    };
    fetchAPI();
  }, []);

  const fetchMoreData = async () => {
    setPages((prevPages) => prevPages + 1);
    const data = await fetchData(
      "https://gateway.marvel.com/v1/public/characters",
      pages,
    );

    if (!data.message) {
      setMarvelData([...marvelData, ...data.data.results]);
    } else {
      setError(data.message);
    }

    if (data.data.results.length === 0 || data.data.results.length < 20) {
      setHasTrue(false);
    }
  };
  return (
    <main className="bgtemplate ">
      <NavBar />
      <section className="lobby-title text-center  ">
        {error ? (
          <p className=" nav-user font-bold">{error}</p>
        ) : (
          <p className=" nav-user font-bold">MARVEL CHARACTERS </p>
        )}
      </section>

      {marvelData.length > 0 ? (
        <InfiniteScroll
          className="container-es "
          dataLength={marvelData.length}
          next={fetchMoreData}
          hasMore={hastrue}
          loader={<TailSpin color="#fff" />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>not more characters</b>
            </p>
          }
        >
          {marvelData.map((character) => (
            <Card
              key={character.id}
              data={character}
              type="character"
              linkdirection={`/character/${character.id}`}
            />
          ))}
        </InfiniteScroll>
      ) : (
        <div className="main grid grid-center">
          <TailSpin color="#fff" />
        </div>
      )}
    </main>
  );
};

export default Lobby;
