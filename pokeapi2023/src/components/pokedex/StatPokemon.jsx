import React from 'react'


const StatPokemon = ({infoStat, pokemon}) => {

  return (
    <li >
      <div>
        <h4>{infoStat.stat.name}</h4>
        <p >{infoStat.base_stat}</p>

      </div>
    </li>
  )
}

export default StatPokemon 