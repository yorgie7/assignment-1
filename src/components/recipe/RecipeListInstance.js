
import React from 'react'
import './RecipeList.css';

const RecipeListInstance =({recipe})=>{
    return (
  
              <div key={recipe.id} className="list-item" 
                style={ recipe.id%2 === 1 ?
                { backgroundColor: '#ffffff'} :
                { backgroundColor: '#e6edf7' }}>
                <div className="double">
                  <input type="checkbox" />
                </div>

                <p className="list-text" style={{ minWidth: '25%', maxWidth: '400px' }}> {recipe.name} </p>
                <p className="list-text" style={{ minWidth: '18%' }}>{Date(recipe.last_updated.date).slice(0, 15)}</p>
                <p className="list-text" style={{ minWidth: '15%' }}>{recipe.cogs}</p>
                <p className="list-text" style={{ minWidth: '18%' }}>{recipe.cost_price.toString().slice(0,7)}</p>
                <p className="list-text" style={{ minWidth: '15%' }}>{recipe.gross_margin.toString().slice(0, 6)}</p>
                <p className="list-text" style={{ minWidth: '10%' }}>TAGS / ACTIONS</p>
              </div>);

}

export default RecipeListInstance;
