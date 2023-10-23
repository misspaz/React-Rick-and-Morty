import "../Search/Search.scss";
import React, { useContext } from 'react';
import { AppContext } from '../../Shared/AppContext';

const Search = () => {
    const {setTexto} = useContext(AppContext);
  return (
    <div className="c-search">
        <input placeholder="Search..." className="c-search__input" onChange={(ev) => setTexto(ev.target.value)} />
    </div>
  )
}

export default Search