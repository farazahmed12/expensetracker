import react, { useState, useEffect } from "react";
import axios from "axios";

import CharacterGrid from "./CharacterGrid";
import "./App.css";
import Search from "./Search";

function App() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);

      setItems(result.data);
    };
    getApi();
  }, [query]);

  return (
    <div className="App">
      <Search setQuery={setQuery} />

      <CharacterGrid items={items} />
    </div>
  );
}

export default App;
