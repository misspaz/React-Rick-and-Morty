import "../Menu/Menu.scss";

import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      {/* <Link className="menu__link" to="">Home</Link> */}
      {/* <Link className="menu__link" to="characters">Characters</Link> */}
      <Link className="menu__link" to="about">
        About
      </Link>
    </div>
  );
}
