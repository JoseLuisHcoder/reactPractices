import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CharacterId = () => {
    const [characterId, setCharacterId] = useState()
    
    const {id} = useParams()
    useEffect(() => {
        const url =  `https://rickandmortyapi.com/api/character/${id}`
        axios.get(url)
            .then(res => setCharacterId(res.data))
            .catch(err => console.log(err))

    
    }, [id])
console.log(characterId);
  return (
    <div>
        <div><img src={characterId?.image} alt="" /></div>
        <div>{characterId?.name}</div>
    </div>
  )
}

export default CharacterId