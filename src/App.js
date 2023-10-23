import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import { AppContext } from "../src/Shared/AppContext";
import { useState } from "react";

function App() {
  const [texto, setTexto] = useState("");
  const [search, setSearch] = useState("");
  return (
    <Router>
      <AppContext.Provider value={{ texto, setTexto, search, setSearch }}>
        <div>
          <div>
            <div className="App-header">
              <Routes>
                <Route path="/characters" element={<CharactersPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
            </div>
          </div>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
