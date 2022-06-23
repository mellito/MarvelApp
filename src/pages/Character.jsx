import { useState, useEffect } from "react";
import { fetchData, fetchCharacterbyId } from "../utils/fechdata";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { CHARACTERS_ROUTE } from "../components/Routes";

const Character = () => {
  const { id } = useParams();
  const [pages, setPages] = useState(1);
  const [hastrue, setHasTrue] = useState(true);
  const [comicsCharacter, setComicsCharacter] = useState([]);
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchData(
        `http://gateway.marvel.com/v1/public/characters/${id}/comics`,
        0,
      );
      setComicsCharacter(data.data.results);
    };

    const fechCharacter = async () => {
      const data = await fetchCharacterbyId(
        `http://gateway.marvel.com/v1/public/characters/${id}`,
      );

      setCharacter(data.data.results[0]);
    };
    fechCharacter();
    fetchAPI();
  }, [id]);

  const fetchMoreData = async () => {
    setPages((prevPages) => prevPages + 1);
    const data = await fetchData(
      `http://gateway.marvel.com/v1/public/characters/${id}/comics`,
      pages,
    );

    setComicsCharacter([...comicsCharacter, ...data.data.results]);
    if (data.data.results.length === 0 || data.data.results.length < 20) {
      setHasTrue(false);
    }
  };

  return (
    <div className="character-container bgtemplate">
      <NavBar />
      <div className="flex character-container__info ">
        {character && (
          <section className="container_info-character">
            <p className=" nav-user font-bold text-center">{character.name} </p>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt=""
            />

            {character.description ? (
              <p className=" info-character--despcription font-bold">
                {character.description}
              </p>
            ) : (
              <p className=" info-character--despcription font-bold">
                this comict has not description
              </p>
            )}
            <Link className="marvel-button " to={CHARACTERS_ROUTE}>
              Back to Characters
            </Link>
          </section>
        )}

        <section>
          <p className=" nav-user font-bold text-center ">
            Comics where appears{" "}
          </p>
          {comicsCharacter.length > 0 ? (
            <InfiniteScroll
              className="container-es"
              dataLength={comicsCharacter.length}
              next={fetchMoreData}
              hasMore={hastrue}
              loader={<TailSpin color="#fff" />}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>not more comics</b>
                </p>
              }
            >
              {comicsCharacter.map((data) => (
                <Card key={data.id} data={data} linkdirection="" />
              ))}
            </InfiniteScroll>
          ) : (
            <div className="main grid grid-center">
              <TailSpin color="#fff" />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Character;
