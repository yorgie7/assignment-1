
import MarginComponent from './components/MarginComponent';
import RecipeList from './components/recipe/RecipeList';

import './App.css'
const App=()=> {
  return (
    <div className="App" style={{backgroundColor:'#dce1e6'}}>
      <MarginComponent />
      <RecipeList />
    </div>
  );
}

export default App;
