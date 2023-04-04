import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelecType = ({setOptionType}) => {
    const [listTypes, setListTypes] = useState()
    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/type/`
        axios.get(url)
            .then(res => setListTypes(res.data.results))
            .catch(err => console.log(err))
    }, [])
    const handleChangeType = e => {
        setOptionType(e.target.value)
    }
  return (
    <select onChange={handleChangeType} value = '' >
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

export default SelecType
