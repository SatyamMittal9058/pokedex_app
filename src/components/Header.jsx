import axios from 'axios';
import { pokemonAPI } from '../utils/Constant';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemons } from '../store/pokemonSlice';

const Header = () => {
    const dispatch = useDispatch();
    const { data, page } = useSelector((store) => store.pokemon);

    const fetchData = async () => {
        try {
            const offset = page * 20;
            const response = await axios.get(`${pokemonAPI}?offset=${offset}&limit=20`);
            const pokemons = response.data.results;
            const pokemonDataWithId = pokemons.map((pokemon) => {
                const url = pokemon.url.split("/")
                const _id = url[url.length - 2]
                const updatadPokemon = {
                    ...pokemon,
                    id: _id,
                }
                return updatadPokemon;
            })
            dispatch(addPokemons(pokemonDataWithId));
        } catch (err) {
            console.log(err);
        }

    }

    const handleScroll = async () => {
        //     console.log("scrollHeight"+ document.documentElement.scrollHeight);
        //     console.log("innerHeight"+ window.innerHeight);
        //     console.log("scrollTop" + document.documentElement.scrollTop);
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                fetchData();
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [dispatch, page]);
    return (
        <div className="flex justify-center border border-gray-500 h-20 items-center shadow-2xl bg-black">
            <h1 className="font-bold text-yellow-400 text-3xl">Pokemon Application</h1>
        </div>

    )
}
export default Header;