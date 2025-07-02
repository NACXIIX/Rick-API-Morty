import { useState, useEffect } from "react";
import ButtonPrevNext from "./ButtonPrevNext"
import CharacterItem from "./CharacterItem";

function CharactersList() {
   const endPoint = 'character'
   const [characters, setCharacters] = useState([])
   const [nextPage, setnextPage] = useState('')
   const [prevPage, setprevPage] = useState([])
   const baseUrl = 'https://rickandmortyapi.com/api/'

   const fetchCharacters = async (url) => {
      try {
         const response = await fetch(url);
         const data = await response.json()
         setCharacters(data.results);

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

   return (
      <>
         <div className="button-container">
            <ButtonPrevNext value="⬅️" handleClickPrevNext={handleClickPrev} />
            <ButtonPrevNext value="➡️" handleClickPrevNext={handleClickNext} />
         </div>
         <div className="characters-container">
            {characters.length === 0
               ? (
                  <p>No se encontraron personajes.</p>
               ) : (
                  <ul>
                     {characters.map(character => (
                        <li key={character.id} className="div-item-character">
                           <CharacterItem character={character} />
                        </li>
                     ))}
                  </ul>
               )}
         </div>
      </>

   );
}

export default CharactersList;