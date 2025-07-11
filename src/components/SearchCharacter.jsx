import {useState} from 'react'
import { useFetchCharacter } from './hooks/useFetchCharacter'
import { searchCharacterFunction } from './hooks/searchCharacterFunction'

export const SearchCharacter = () => {
    const [inputSearch, setInputSearch] = useState("")
    const [newCharacters, setnewCharacters] = useState([])
    const {characters} = useFetchCharacter('character', newCharacters)
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
        if (!inputSearch) return 
        setnewCharacters([])
        setCharacterFound(searchingCharacter.characterFound)
        setnewCharacters([searchingCharacter.newCharacters])
        console.log(newCharacters)
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder="Buscar personaje"
        value={inputSearch}
        onChange={onChange}/>
        <button onClick={handleClickSearch}>Buscar</button>
        

        {/* Lo de abajo es para testear que la funcionalidad este correcta */ }
        {characterfound && <p>Encontrado</p>}

        <ul>
        {newCharacters.map(newCharacter => <li> {newCharacter} - </li>)}
        </ul>

    </form>
  )
}