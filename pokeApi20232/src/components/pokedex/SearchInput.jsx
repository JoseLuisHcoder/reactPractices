import React from 'react'

const SearchInput = ({setPokeSearch}) => {
    const handleSubmit = e => {
        setPokeSearch(e.target.searchText.value.trim())
    }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" id='searchText' />
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchInput
