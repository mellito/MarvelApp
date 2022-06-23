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
  const [comicUri, setComicUri] = useState("");
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchData(
        "http://gateway.marvel.com/v1/public/characters?",
        0,
      );

      setMarvelData(data.data.results);
    };
    fetchAPI();
  }, []);

  const fetchMoreData = async () => {
    setPages((prevPages) => prevPages + 1);
    const data = await fetchData(
      "http://gateway.marvel.com/v1/public/characters?",
      pages,
    );
    setMarvelData([...marvelData, ...data.data.results]);
    if (data.data.results.length === 0 || data.data.results.length < 20) {
      setHasTrue(false);
    }
  };
  return (
    <main className="  lobby login-right   ">
      <NavBar />
      <section className="lobby-title ">
        <p className=" nav-user font-bold">MARVEL CHARACTERS </p>
      </section>

      {marvelData.length > 0 ? (
        <InfiniteScroll
          className="container-es"
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
            <Card key={character.id} data={character} />
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
