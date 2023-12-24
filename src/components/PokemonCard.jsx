import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { pokemonAPI } from '../utils/Constant';
import axios from 'axios';
import StatData from './StatData';

const PokemonCard = () => {
    const {pokemonid}=useParams();
    const [statData,setStatData]=useState([]);
    const pokemonDetail=async()=>{
        try{
            const response=await axios.get(`${pokemonAPI}/${pokemonid}/`);
            const data=response.data.stats;
            setStatData(data);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        pokemonDetail();
    },[]);
  return (
    <div className="bg-gray-200 h-screen">
        <StatData stats={statData}/>
    </div>
  )
}

export default PokemonCard