import React, { useEffect, useState } from 'react'
import { ImageAPI } from '../utils/Constant';
import axios from 'axios';

const Card = (props) => {
  const { pokemon } = props;
  const [pokemonData, setPokemonData] = useState([]);
  const fetchpokemonData = async () => {
    try {
      const response = await axios.get(pokemon.url);
      const data = response.data
      setPokemonData(data);
    } catch (err) {
      console.log(err);
    }

  }
  useEffect(() => {
    fetchpokemonData();
  }, []);
  // console.log(pokemonData);
  // console.log(pokemonData.types[0].type.name);
  const typeColorMap = {
    grass: 'bg-green-500',
    fire: 'bg-red-600',
    water: 'bg-blue-600',
    electric: 'bg-yellow-300',
    poison: 'bg-purple-400',
    fairy: 'bg-pink-400',
    bug: 'bg-orange-400',
    ground: 'bg-amber-700',
    normal: 'bg-rose-500',
    fighting: 'bg-violet-500',
    rock:'bg-gray-500',
    ghost:'bg-cyan-700',
    psychic:'bg-amber-400',
    ice:'bg-blue-300',
    dragon:'bg-orange-700',
    dark:'bg-violet-900',
    steel:'bg-cyan-300'
  };
  return (
    <div className="flex">
      {pokemonData &&
        (<div className={`flex border border-gray-400 h-48 w-80 m-2 rounded-2xl ${pokemonData?.types?.[0]?.type?.name && typeColorMap[pokemonData.types[0].type.name]}`}>

          <img className="w-36  p-2" alt="card" src={`${ImageAPI}${pokemon.id}.svg`} />
          <div className="mt-4 ml-5">
            <h1 className="font-bold flex justify-center">{pokemon.name.toUpperCase()}</h1>
            <h1 className="font-semibold p-1 m-2 border border-gray-200 rounded-xl flex justify-center"> id:#00{pokemonData.id} </h1>
            <div className="font-semibold text-gray-900 ">
              {pokemonData?.types?.map((pokemonType,i) =>
                <h1 key={i} className="flex justify-center">{pokemonType.type.name.toUpperCase()}</h1>
              )}
            </div>
          </div>
        </div>)}
    </div>

  )
}
export default Card