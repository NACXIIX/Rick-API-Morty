import {useState} from 'react'
import { useFetchCharacter } from './hooks/useFetchCharacter'
import { searchCharacterFunction } from './hooks/searchCharacterFunction'

export const SearchCharacter = () => {
    const [inputSearch, setInputSearch] = useState("")
    const [newCharacters, setnewCharacters] = useState([])
    const {characters} = useFetchCharacter('character')
    const [characterfound, setCharacterFound] = useState(false)
    

    const searchingCharacter = searchCharacterFunction(inputSearch, characters.map(character => character.name))


    const onSubmit = (e) => {
        e.preventDefault()
        setInputSearch("")
    }

    const onChange = (e) => {
        setInputSearch(e.target.value)
    }
    
    const handleClickSearch = () => {
        setCharacterFound(searchingCharacter.found)
        setnewCharacters(searchingCharacter.new_array)
        
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder="Buscar personaje"
        value={inputSearch}
        onChange={onChange}/>
        <button onClick={handleClickSearch}>Buscar</button>
        
        {characterfound && <p>Encontrado</p>}
    </form>
  )
}