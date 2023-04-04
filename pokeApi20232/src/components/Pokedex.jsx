import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from './pokedex/PokemonCard'
import { useSelector } from 'react-redux'
import SearchInput from './pokedex/SearchInput'
import SelecType from './pokedex/SelecType'

const Pokedex = () => {
 const [pokemons, setPokemons] = useState()
const [pokeSearch, setPokeSearch] = useState()
const [optionType, setOptionType] = useState("All")


const nameTraineStore =  useSelector(state => state.nameTraineSlice)

 const getAllPokemons=() => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    axios.get(url)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
     }
     useEffect(() => {
      if(optionType !== "All"){
        const url = `https://pokeapi.co/api/v2/type/${optionType}`
        axios.get(url)
          .then(res =>{
            const arr = res.data.pokemon.map(e => e.pokemon)
            setPokemons(arr);
        } )
        .catch(err => console.log(err))
      }
      else if(pokeSearch){
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
        const obj = [
          {
            url
          }
        ]
        setPokemons(obj)
      } else {
        getAllPokemons()
      }
     }, [optionType, pokeSearch])
    //  console.log(pokemons);
  return (
    <div>
      <h2>Welcome {nameTraineStore}</h2>
      <SearchInput
      setPokeSearch = {setPokeSearch}
      />
      <SelecType 
      setOptionType = {setOptionType}
      />
      {
        pokemons?.map(pokemon => (
            <PokemonCard 
            key = {pokemon.url}
            url = {pokemon.url}
            />
        ))
      }
    </div>
  )
}

export default Pokedex
