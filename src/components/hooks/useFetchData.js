import {useEffect, useState} from 'react'

export const useFetchData = (endPoint) => {

    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [nextPage, setnextPage] = useState('')
    const [prevPage, setprevPage] = useState([])
    const baseUrl = 'https://rickandmortyapi.com/api/'

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
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
        fetchData(`${baseUrl}${endPoint}`);
    }, [endPoint])
    
    const handleClickNext = () => {
        nextPage && fetchData(nextPage);
     }
  
     const handleClickPrev = () => {
        prevPage && fetchData(prevPage);
     }
  
    return {
        characters,
        isLoading,
        handleClickNext,
        handleClickPrev
    }
}
