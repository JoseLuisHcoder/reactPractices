import React from 'react'

const SearchInput = ({setPokeSearch, setOptionTypeSelect}) => {
    const handleInput = e => {
        e.preventDefault()
        let valueText = e.target.searchText.value.trim().toLowerCase() 
        setPokeSearch(valueText)
        setOptionTypeSelect("All")
        e.target.searchText.value = ""
    }
    
  return (
   <form className='pb-10' onSubmit={handleInput} >
    <input className='border-solid' placeholder='search' type="text" id='searchText' />
    <button className='bg-red-400'>Search</button>
   </form>
  )
}

export default SearchInput
