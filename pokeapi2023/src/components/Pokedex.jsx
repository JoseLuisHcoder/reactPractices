import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './pokedex/PokemonCard'
import SearchInput from './pokedex/SearchInput'
import SelectType from './pokedex/SelectType'

const Pokedex = () => {
const [pokemons, setPokemons] = useState()
const [pokeSearch, setPokeSearch] = useState()
const [optionTypeSelect, setOptionTypeSelect] = useState("All")

const nameTrainer = useSelector(state => state.nameTrainer)
console.log(optionTypeSelect);
const getAllPokemons = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    axios.get(url)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
}
useEffect(() => {
    if(optionTypeSelect !== "All"){
        const url = `https://pokeapi.co/api/v2/type/${optionTypeSelect}`
        axios.get(url)
            .then(res => {
                const arr = res.data.pokemon.map(e => e.pokemon)
                setPokemons(arr);
            })
            }
    else if(pokeSearch){
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}/`
        const obj = 
            [
                {
                    url
                }
            ]
        
        setPokemons(obj)
    }else {
        getAllPokemons()

    }
}, [pokeSearch, optionTypeSelect])


  return (
    <div>
        <h2>Welcome {nameTrainer}</h2>
        <SearchInput 
        setPokeSearch = {setPokeSearch}
        setOptionTypeSelect = {setOptionTypeSelect}
        />
        <SelectType 
        setOptionTypeSelect ={setOptionTypeSelect}
        optionTypeSelect = {optionTypeSelect}
        setPokeSearch = {setPokeSearch}
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
