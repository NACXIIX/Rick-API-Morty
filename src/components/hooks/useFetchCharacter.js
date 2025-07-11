import {useEffect, useState} from 'react'

export const useFetchCharacter = (endPoint, foundCharactersList) => {
    let numberPage = 1
    const [pageQuery, setPageQuery] = useState(`?page=${numberPage}`)
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
    }, [endPoint,foundCharactersList, pageQuery])

    return {
        setCharacters,
        characters,
        isLoading,
    }
}
