import {useState} from 'react'
import { useFetchCharacter } from './hooks/useFetchCharacter'
import searchCharacterFunction from './hooks/searchCharacter'

export const SearchCharacter = () => {
    const [inputSearch, setInputSearch] = useState("")
    const {characters} = useFetchCharacter('character', 'Rick')
    const [found, setFound] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        setInputSearch("")
    }

    const onChange = (e) => {
        setInputSearch(e.target.value)
    }

    // Tengo que hacer una funcion en donde reciba una lista
    // y retorne una lista nueva con los personajes encontrados
    // (minimo 3 letras y que vaya coincidiendo con palabras sueltas) y
    // tambien devuelva true si se encontraron personajes
    const searchCharacterButton = () => {
        const charactersFounded = []

        characters.forEach(character => {
            if (inputSearch.trim().toLowerCase() === character.name.trim().toLowerCase()) {
                charactersFounded.push(character.name)
                setFound(true)
            }
        });
        
    }
  return (
    <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder="Buscar personaje"
        value={inputSearch}
        onChange={onChange}/>
        <button onClick={searchCharacterButton}>Buscar</button>

        {found && <p>Encontrado</p>}
    </form>
  )
}