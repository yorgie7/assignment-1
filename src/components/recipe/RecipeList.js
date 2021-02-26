
import React, { Component } from 'react'
import axios from "axios";
import './RecipeList.css';

const buttonStyle = {
  backgroundColor: 'white',
  fontSize: '14px',
  height: '40px',
  width: '200px',
  padding: '15px 30px 10px 0',
  border: '0px solid white', borderRadius: '7px 30px 0 0',
  outline: 'none'
};


const buttonStyle2 = {
  ...buttonStyle, backgroundColor: 'skyblue'
}


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

    // const result = await axios.get(`https://api.github.com/users/`);
    const result = await axios.get(`https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?page=1`);

    this.setState({ recipes: result.data.results });
    this.setState({ isLoading: false });
    console.log(this.state);
  }

  async fetchData() {
    console.log();

    this.setState({ isLoading: true });
    const result = await axios.get(`https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?is_incorrect=false`);

    this.setState({ recipes: result.data.results });

    this.setState({ isLoading: false });
    console.log(this.state);
  }


  render() {
    const { recipes, isLoading } = this.state;

    return (
      <div style={{ height: '60vh', borderRadius: '10px', backgroundColor: 'white', margin: '32px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#dce1e6' }}>

          <button onClick={() => this.fetchData()} style={buttonStyle}> ALL RECIPE(S) </button>
          <button onClick={() => this.fetchData()} style={buttonStyle2}> INCORRECT </button>
          <button onClick={() => this.fetchData()} style={buttonStyle}> UNTAGGED </button>
          <button onClick={() => this.fetchData()} style={buttonStyle}> DISABLED </button>

        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'row', flexBasis: '500px',
          padding: '0 10px', alignItems: 'center', 
          justifyContent: 'space-between',
          height: '40px', margin: ' 32px 16px 0 16px',
          backgroundColor: 'RGB(0, 0, 255, 0.3)'
        }}>

          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <p style={{ color: 'white', fontWeight: '400', fontSize: '16px' }}>NAME</p>
          <p style={{ color: 'white', fontWeight: '400', fontSize: '16px' }}>LAST UPDATED</p>
          <p style={{ color: 'white', fontWeight: '400', fontSize: '16px' }}>COGS%</p>
          <p style={{ color: 'white', fontWeight: '400', fontSize: '16px' }}>COST PRICE</p>
          <p style={{ color: 'white', fontWeight: '400', fontSize: '16px' }}>GROSS MARGIN</p>
          <p style={{ color: 'white', fontWeight: '400', fontSize: '16px' }}>TAGS / ACTIONS</p>
        </div>



        { 
        !isLoading &&
          recipes ? (
            recipes.map((recipe, index) => (
              <div key={recipe.id} className={ index%2 ===0 ? "list-item-1" : "list-item-2"}>

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

