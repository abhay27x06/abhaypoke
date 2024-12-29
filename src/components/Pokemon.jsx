import React, { useEffect, useState } from 'react'
import PokemonCard from '../cards/PokemonCard';
import './Pokemon.css';
const Pokemon = () => {
    const [pokemon, setPokemon]=useState([]);
    const [loading, setLoading]=useState(true);
    const [query, setQuery]=useState('');
    const API="https://pokeapi.co/api/v2/pokemon?limit=124";
    const fetchPokemon=async ()=>{
        try {
            const res = await fetch(API);
            const data= await res.json();
            const detailedPokemonData=data.results.map(async (curPokemon)=>{
                const res = await fetch(curPokemon.url);
                const data = await res.json();
                return data;
            });
            const detailedResponse = await Promise.all(detailedPokemonData);
            setPokemon(detailedResponse);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchPokemon();
    }, [])
    if (loading) {
        return (
            <div>Loading...</div>
        )
    }
  return (
    <div className='parDiv'>
        <h3 className='head3'>Let's Catch Pokemon!</h3>
        <div className='searchDiv'>
            <input type="text" className='searchInput' value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search Pokemon'/>
        </div>
        <div className='pokemonCardDiv'>
            {pokemon.map((curPokemon)=>{
                if (curPokemon.name.includes(query)) {
                    return <PokemonCard key={curPokemon.id} curPokemon={curPokemon} query={query}/>
                }
            })}
        </div>
    </div>
  )
}

export default Pokemon