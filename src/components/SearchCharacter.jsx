import {useState} from 'react'
import { useFetchCharacter } from './hooks/useFetchCharacter'
import { searchCharacterFunction } from './hooks/searchCharacterFunction'
import CharacterItem from './CharacterItem'

export const SearchCharacter = () => {
    const [inputSearch, setInputSearch] = useState("")
    const [newCharacters, setnewCharacters] = useState([])
    const {characters, isLoading} = useFetchCharacter('character', newCharacters)
    const [characterfound, setCharacterFound] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        setInputSearch("")
    }

    const onChange = (e) => {
        setInputSearch(e.target.value)
    }
    
    const handleClickSearch = () => {
        if (!inputSearch) return
        const searchingCharacter = searchCharacterFunction(inputSearch, characters)
        setCharacterFound(searchingCharacter.characterFound)
        setnewCharacters(searchingCharacter.newCharacters)
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder="Buscar personaje"
        value={inputSearch}
        onChange={onChange}/>
        <button onClick={handleClickSearch}>Buscar</button>
        {isLoading 
        ?
            <p>Cargando personajes...</p> 
        : 
            characterfound 
            ?
                <ul>
                    {newCharacters.map(newCharacter => <li key={newCharacter.id}> <CharacterItem character={newCharacter} /> </li>)}
                </ul>
            : 
                <p>Personaje no encontrado</p>
        }
    </form>
  )
}