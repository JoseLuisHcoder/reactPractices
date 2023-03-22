import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectType = ({setOptionTypeSelect , optionTypeSelect, setPokeSearch}) => {
const [listTypes, setListTypes] = useState()

useEffect(() => {
    const url = `https://pokeapi.co/api/v2/type/`
    axios.get(url)
        .then(res => setListTypes(res.data.results))
        .catch(err => console.log(err))
}, [])

const handleChangeType = e => {
    setOptionTypeSelect(e.target.value);
    setPokeSearch("")
}
console.log(listTypes);
  return (
    <select onChange={handleChangeType} value = {optionTypeSelect} >
    <option value="All">All Pokemons</option>
    {
        listTypes?.map(type => (
            <option value={type.name}
                key={type.name}
            >{type.name}</option>
        ))
    }
   </select>
  )
}

export default SelectType
