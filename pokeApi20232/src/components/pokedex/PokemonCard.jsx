import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StatPokemon from './StatPokemon'
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({url}) => {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState()
    useEffect(()=> {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))

    }, [])
    const handleNAvigatePokemonDetail = () => navigate(`/pokedex/${pokemon.name}`)
  return (
    <article onClick={handleNAvigatePokemonDetail} >
    <header>
        <img  src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
    </header>
    <div >

        <section >
            <h3>{pokemon?.name}</h3>
            <span >
                {
                    pokemon?.types.map(slot => (
                        <span  key={slot.type.url}>{slot.type.name}</span>
                    ))
                }
            </span>
        </section>
        <footer >
            <div >
                {
                    pokemon?.stats.map(stat =>(
                        <StatPokemon 
                        key={stat.stat.url}
                        infoStat={stat}
                        />
                    ))
                }
            </div>
            
        </footer>
    </div>
</article>
  )
}

export default PokemonCard
