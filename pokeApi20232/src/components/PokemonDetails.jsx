import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
 
const PokemonDetails = () => {
    const {name} = useParams()
    const [pokeInfo, setPokeInfo] = useState()

    useEffect(() => {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`
      axios.get(url)
        .then(res => setPokeInfo(res.data))
        .catch(err => console.log(err))
    }, [])
  return (
    <article>
    <header >
          <img  src="./images/pokeunite.png" alt="" />
      <div >
          <h2 >  Details and Statistics</h2>
          
      </div>
      </header>
    <img src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="" />
    <h1>{name}</h1>
  </article>
  )
}

export default PokemonDetails
