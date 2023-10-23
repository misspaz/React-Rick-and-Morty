import Menu from "../../components/Menu/Menu";
// import ChangeTheme from "./components/ChangeTheme/ChangeTheme";

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="bg-page">
      <div class="animation-wrapper">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
      </div>
      <div class="page-wrapper">
       
          <Menu />
       
        <div className="bg-page__info">
          <img
            className="bg-page__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
            alt="Rick and Morty logo"
          />
          <h1 className="bg-page__title">The Rick 'n Morty API experience</h1>
          <Link to="/characters">
            <button className="bg-page__button">Meet the characters</button>
          </Link>
        </div>
      </div>
      </div>

      {/* <ChangeTheme /> */}
    </>
  );
}
