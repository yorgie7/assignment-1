
import React, { Component } from 'react'
import axios from "axios";
import './RecipeList.css';
import styled from 'styled-components';


const ListContainer= styled.div`
  display: flex;
  flex-direction: row;
   flex-basis: 500px;
  padding: 0 10px; 
  align-items: center;
  justify-content: space-between;
  height: '40px';
  margin: 32px 16px 0 16px;
  background-color: rgb(0, 0, 255, 0.3);
`


class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      activeTab: 1,
      isLoading: false,
    };

  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const result = await axios.get(`https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?page=1`);
    this.setState({ recipes: result.data.results });
    this.setState({ isLoading: false });
  }


  async onSelectTab(t) {
    console.log(t);

    await this.setState({ isLoading: true, activeTab: t.id });
    const result = await axios.get(`https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?${t.query}`);
    this.setState({ recipes: result.data.results });
    this.setState({ isLoading: false });
    console.log(`https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?${t.query}`);
  }


  render() {
    const { recipes, isLoading } = this.state;

    let arr = [{ id: 0, label: "ALL RECIPE(S)", query: "page=1" },
    { id: 1, label: "INCORRECT", query: "is_incorrect=false" },
    { id: 2, label: "UNTAGGED", query: "is_untagged=false" },
    { id: 3, label: "DISABLED", query: "is_desabled=true" }]

    return (
      <div style={{ height: '60vh', borderRadius: '10px', backgroundColor: 'white', margin: '32px' }}>

        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#dce1e6' }}>

          { arr.map((t, index) => <button onClick={() => this.onSelectTab(t)} className="active-tab"> {t.label} </button>)}

        </div>

        <ListContainer>

          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <p style={{ color: 'white', fontWeight: '400', fontSize: '16px' }}>NAME</p>
          <p style={{ color: 'white', fontWeight: '400', fontSize: '16px' }}>LAST UPDATED</p>
          <p style={{ color: 'white', fontWeight: '400', fontSize: '16px' }}>COGS%</p>
          <p style={{ color: 'white', fontWeight: '400', fontSize: '16px' }}>COST PRICE</p>
          <p style={{ color: 'white', fontWeight: '400', fontSize: '16px' }}>GROSS MARGIN</p>
          <p style={{ color: 'white', fontWeight: '400', fontSize: '16px' }}>TAGS / ACTIONS</p>
        </ListContainer>



        {
          !isLoading &&
            recipes ? (
              recipes.map((recipe, index) => (
                <div key={recipe.id} className={index % 2 === 0 ? "list-item-1" : "list-item-2"}>

                  <div className="double">
                    <input type="checkbox" />
                  </div>

                  <p className="list-text" style={{ minWidth: '28%', maxWidth: '400px' }}> {recipe.name} </p>
                  <p className="list-text" style={{ minWidth: '15%' }}>{Date(recipe.last_updated.date).slice(0, 15)}</p>
                  <p className="list-text" style={{ minWidth: '15%' }}>{recipe.cogs}</p>
                  <p className="list-text" style={{ minWidth: '15%' }}>{recipe.cost_price}</p>
                  <p className="list-text" style={{ minWidth: '15%' }}>{recipe.gross_margin.toString().slice(0, 6)}</p>
                  <p className="list-text" style={{ minWidth: '200px' }}>TAGS / ACTIONS</p>
                </div>
              ))
            ) : <h1>loading....</h1>
        }

      </div>

    );
  }
}
export default RecipeList;

