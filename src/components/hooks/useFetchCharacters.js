import {useEffect, useState} from 'react'

export const useFetchCharacters = ({ endPoint }) => {

    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [nextPage, setnextPage] = useState('')
    const [prevPage, setprevPage] = useState([])
    const baseUrl = 'https://rickandmortyapi.com/api/'
    const fetchCharacters = async (url) => {
        try {
            const response = await fetch(url); // variable url da undefined, si se le pasa el endpoint hardcodeado anda.
            const data = await response.json()
            setCharacters(data.results);
            setIsLoading(false)
            data.info.next ? setnextPage(data.info.next) : setnextPage('')
            data.info.prev ? setprevPage(data.info.prev) : setprevPage('')
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    useEffect(() => {
        fetchCharacters(`${baseUrl}${endPoint}`);
    }, [endPoint])


    const handleClickNext = () => {
        nextPage && fetchCharacters(nextPage);
     }
  
     const handleClickPrev = () => {
        prevPage && fetchCharacters(prevPage);
     }
  
    return {
        characters,
        isLoading,
        handleClickNext,
        handleClickPrev
    }
}
