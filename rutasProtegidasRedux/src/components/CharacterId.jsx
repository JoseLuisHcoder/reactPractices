import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CharacterId = () => {
    const [characterId, setCharacterId] = useState()
    const {id} = useParams()
    useEffect(() => {
        const url = `https://rickandmortyapi.com/api/character/${id}`
        axios.get(url)
            .then(res => setCharacterId(res.data))
            .catch(err => console.log(err))
    }, [id])
    console.log(characterId);
  return (
    <div>
        <span>
            <img src={characterId.image} alt="" />
        </span>
      <h1>{characterId.name}</h1>
    </div>
  )
}

export default CharacterId
