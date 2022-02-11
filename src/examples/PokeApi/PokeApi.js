// const url = "https://www.coderhouse.com/ ";

import { useEffect, useState } from "react";

export const PokeApi = () => {
  const [pokemon, setPokemon] = useState(null);
  const [id, setId] = useState(1);

  const handleNext = () => {
    setId(id + 1);
  };
  const handlePrevious = () => {
    id > 1 && setId(id - 1);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [id]);

  return (
    <div className="container my-5">
      <h2>Poke Api</h2>

      <hr />

      {pokemon && (
        <div>
          <h3> {pokemon.name} </h3>
          <img src={pokemon.sprites.front_default} />
        </div>
      )}

      <hr />

      <button
        onClick={handlePrevious}
        className="btn btn-outline-primary"
        disabled={id === 1}
      >
        Previous
      </button>
      <button onClick={handleNext} className="btn btn-primary">
        Next
      </button>
    </div>
  );
};
