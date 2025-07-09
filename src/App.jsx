import './App.css';
import CharactersList from './components/CharactersList';
import { SearchCharacter } from './components/SearchCharacter';

function App() {
   
   return (
      <>
         <SearchCharacter></SearchCharacter>
         <CharactersList endPoint="character"></CharactersList>
      </>
   )
}

export default App;
