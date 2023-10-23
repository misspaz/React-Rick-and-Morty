import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import Pagination from "../../components/Pagination/Pagination";
import { AppContext } from "../../Shared/AppContext";
import Search from "../../components/Search/Search";
import Menu from "../../components/Menu/Menu";

export default function CharactersPage() {
  const { texto } = useContext(AppContext);
  const [characters, setCharacters] = useState([]);
  const [charactersFilter, setCharactersFilter] = useState([]);

  const getCharacters = async (newPage) => {
    const results = await axios(
      `https://rickandmortyapi.com/api/character/?name=${texto}&page=` + newPage
    );
    setCharacters(results.data.results);
    setCharactersFilter(results.data.results);
  };

  const filterCharacters = () => {
    const filterCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(texto.toLowerCase())
    );
    setCharactersFilter([...filterCharacters]);
  };

  useEffect(() => {
    getCharacters(1);
  }, []);

  useEffect(() => {
    filterCharacters();
  }, [texto]);

  return (
    <div>
      <div className="container ">
        <Menu />
        <img
          className="b-character-container__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
          alt="Rick and Morty logo"
        />
        <Search />
        <Pagination onChangePage={getCharacters} />
        <Gallery data={charactersFilter} />
      </div>
      <div>
        <div className="bg-page">
          <div class="animation-wrapper">
            <div class="particle particle-1"></div>
            <div class="particle particle-2"></div>
            <div class="particle particle-3"></div>
            <div class="particle particle-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
