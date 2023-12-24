import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { Link } from 'react-router-dom';
import { searchData } from '../store/pokemonSlice';

const Body = () => {
  const data = useSelector((store) => store.pokemon.data);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  console.log(data);
  const handleSearch = () => {
  const newFilteredData = data.map((element,i) =>
    element.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(searchText.toLowerCase()) ||
        pokemon.id.toString().includes(searchText.toLowerCase())
    )
  );
  setFilteredData(newFilteredData);
  };
  const allData = searchText ? filteredData : data;
  

  
  return (
    <div className="bg-gray-700">
     <div className="flex items-center">
      <input
        className="p-2 m-4 border border-gray-300 rounded-lg"
        type="text"
        placeholder="Search by name or id..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    <button onClick={handleSearch} className="bg-black text-white p-2 rounded-lg hover:bg-blue-600 ">Search</button>
    </div>
      
       { allData.map((element, index) => (
        <div key={index} className="flex flex-wrap">
          {element.map((pokemon, i) => (
            <>
              <Link key={i} to={"/pokemondetail/" + pokemon.id}><Card pokemon={pokemon} /></Link>
            </>
          ))}
        </div>
      ))}

    </div>
  )
}

export default Body;

