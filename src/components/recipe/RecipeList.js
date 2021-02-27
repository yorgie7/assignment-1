
import React, { Component } from 'react'
import axios from "axios";
import './RecipeList.css';
import styled from 'styled-components';
import RecipeListInstance from './RecipeListInstance'


const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 500px;
  padding: 0 10px; 
  align-items: center;
  justify-content: space-between;
  height: '40px';
  margin: 24px 16px 0 16px;
  background-color: rgb(0, 0, 255, 0.5);
`

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      activeTab: 0,
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
    await this.setState({ isLoading: true, activeTab: t.id });
    const result = await axios.get(`https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?${t.query}`);
    this.setState({ recipes: result.data.results });
    this.setState({ isLoading: false });
  }

  render() {
    const { recipes, isLoading, activeTab } = this.state;

    let arr = [
      { id: 0, label: "ALL RECIPE(S)", query: "page=1" },
      { id: 1, label: "INCORRECT", query: "is_incorrect=false" },
      { id: 2, label: "UNTAGGED", query: "is_untagged=false" },
      { id: 3, label: "DISABLED", query: "is_desabled=true" }
    ]

    return (
      <div style={{ borderRadius: '10px', backgroundColor: 'white', margin: '32px',paddingBottom:'15px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#dce1e6' }}>

          {
            arr.map((t, index) =>
              <button key={index} onClick={() => this.onSelectTab(t)} className="tab"
                style={activeTab === t.id ?
                  { backgroundColor: '#ffffff', color: 'blue', fontWeight: '600' } :
                  { backgroundColor: '#e6edf7', color: 'slategray' }}>
                {t.label}
              </button>
            )
          }

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
          !isLoading && recipes ?
            recipes.map((recipe, index) =>  <RecipeListInstance key={index} recipe={recipe} /> )
             :
          <h1> loading....</h1>
        }
      </div>
    );
  }
}

export default RecipeList;
