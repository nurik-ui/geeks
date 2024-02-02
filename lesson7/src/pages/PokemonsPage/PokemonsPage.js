import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from '../../components/Pokemon/PokemonCard';
import classes from './PokemonsPage.module.css';
import Pagination from '../../components/Pagination/Pagination';


const PokemonsPage = () => {

  const [ pokemonList, setPokemonList ] = useState([]);

  const getPokemons = async(limit, offset) => {
    try {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
      return console.log(data)
    } catch(e) {
      console.log('error'.e);
    } finally {
      console.log('final');
    }

  };

  const [offset, setOffset] = useState(1)
  const [limit, setLimit] = useState(5)
  let page= Math.floor(offset/limit)+1

  if(page<=0) {
    page=1
    setOffset(1)
  }
  const handlePrev = () => {
    console.log('handlePrev');

    setOffset(prev=>prev-limit)
  }
  const handleNext = () => {
    console.log('handleNext');
    setOffset(prev=>prev+limit)
  }

  useEffect(() => {
    getPokemons(limit, offset).then(pokemons=>setPokemonList(pokemons));
  }, [offset, limit]);

  return (
    <div className="App">
      <input
      type="number"
      onChange={event => setLimit(event.target.value)}
      value={limit}
      />
      {/*<div className={classes.list}>*/}
      {/*  {*/}
      {/*    pokemonList.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)*/}
      {/*  }*/}
      {/*</div>*/}
      <Pagination page={page} handlePrev={handlePrev} handleNext={handleNext}/>

    </div>
  );
};

export default PokemonsPage;