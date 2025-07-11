import {useEffect, useState} from 'react'

export const useFetchCharacter = (endPoint, foundCharactersList) => {
    
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const baseUrl = 'https://rickandmortyapi.com/api/'

    const fetchCharacter = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json()
            setCharacters(data.results);
            setIsLoading(false)
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    useEffect(() => {
        fetchCharacter(`${baseUrl}${endPoint}`);
    }, [endPoint])

    return {
        setCharacters,
        characters,
        isLoading,
    }
}
