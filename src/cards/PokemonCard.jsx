import React from 'react'
import './PokemonCard.css'
const PokemonCard = ({key, curPokemon, query}) => {
  return (
    <div className='cardDiv'>
        <div className='imgDiv'>
            <img src={curPokemon.sprites.other.dream_world.front_default} alt={curPokemon.name} className='pokemonImage'/>
        </div>
        <div className='headDivCard'>
            <h3 className='head3Card'>{curPokemon.name}</h3>
        </div>
    </div>
  )
}

export default PokemonCard