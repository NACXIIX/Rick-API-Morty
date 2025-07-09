import ButtonPrevNext from "./ButtonPrevNext"
import CharacterItem from "./CharacterItem";
import { useFetchData } from "./hooks/useFetchData";

function CharactersList({ endPoint }) {
   const { characters, isLoading, handleClickNext, handleClickPrev } = useFetchData(endPoint)

   return (
      <>
         <div className="button-container">
            <ButtonPrevNext value="⬅️" handleClickPrevNext={handleClickPrev} />
            <ButtonPrevNext value="➡️" handleClickPrevNext={handleClickNext} />
         </div>
         {isLoading ?
            <p>Cargando personajes...</p>
            :
            <div className="characters-container">
               {!characters || characters.length === 0
                  ?
                  <p>No se encontraron personajes.</p>
                  :
                  <ul>
                     {characters.map(character => (
                        <li key={character.id} className="div-item-character">
                           <CharacterItem character={character} />
                        </li>
                     ))}
                  </ul>
               }
            </div>
         }
      </>
   );
}

export default CharactersList