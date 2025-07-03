import { useState, useEffect } from "react";
import ButtonPrevNext from "./ButtonPrevNext"
import CharacterItem from "./CharacterItem";
import { useFetchCharacters } from "./hooks/useFetchCharacters";

function CharactersList() {
   const endPoint = 'character'
   const {characters, isLoading, handleClickNext, handleClickPrev} = useFetchCharacters(endPoint)

   return (
      <>
         <div className="button-container">
            <ButtonPrevNext value="⬅️" handleClickPrevNext={handleClickPrev} />
            <ButtonPrevNext value="➡️" handleClickPrevNext={handleClickNext} />
         </div>
         <div className="characters-container">
            {!characters || characters.length === 0
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