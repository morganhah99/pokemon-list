import React from 'react'
import './PokemonList.css'

function PokemonList({ pokemon }) {
  return (
    <div>
        {pokemon.map(p => (
            <div className='pokemon'key={p}>{p}</div>
        ))}
    </div>
  )
}

export default PokemonList