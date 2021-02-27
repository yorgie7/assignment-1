import MarginBar from './MarginBar';
import ProgressBar from './progressbar/ProgressBar';
import './progressbar/ProgressBar.css';

const style1 ={maxWidth:'33%',
                display:'flex',
                 flexDirection: 'column',
                  justifyContent:'space-between',
                alignItems:'center',
              padding:'20px 0'}

const MarginComponent = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

      <MarginBar title="High Margin Recipes" >

        <div style={{ display: 'flex', marginLeft: '30px' }}>
          <div style={style1}>
            <p className="text-recipe-name" style={{marginBottom:'35px'}}>Ambur Biryany</p>

            <ProgressBar
              progress='83'
              size={80}
              strokeWidth={4}
              circleOneStroke='#d9edfe'
              circleTwoStroke='green'
              highMargin
            />
          </div>

          <div style={style1}>
            <p className="text-recipe-name">Paneer Tikka Masala</p>

            <ProgressBar
              progress='79'
              size={80}
              strokeWidth={4}
              circleOneStroke='#d9edfe'
              circleTwoStroke='green'
              highMargin
            />
          </div>

          <div style={style1}>
            <p className="text-recipe-name">Palak Paneer Butter Masala</p>

            <ProgressBar
              progress='71'
              size={80}
              strokeWidth={4}
              circleOneStroke='#d9edfe'
              circleTwoStroke='green'
              highMargin
            />
          </div>
        </div>
      </MarginBar>


      <MarginBar title="Low Margin Recipes">

        <div style={{ display: 'flex', marginLeft: '30px' }}>
          <div style={style1}>
            <p className="text-recipe-name" style={{marginBottom:'35px'}}>Ambur Biryany</p>

            <ProgressBar
              progress='17'
              size={80}
              strokeWidth={4}
              circleOneStroke='#d9edfe'
              circleTwoStroke='red'
            />
          </div>

          <div style={style1}>
            <p className="text-recipe-name">Paneer Tikka Masala</p>

            <ProgressBar
              progress='35'
              size={80}
              strokeWidth={4}
              circleOneStroke='#d9edfe'
              circleTwoStroke='red'
            />
          </div>

          <div style={style1}>
            <p className="text-recipe-name">
              Palak Paneer Butter Masala
            </p>

            <ProgressBar
              progress='17'
              size={80}
              strokeWidth={4}
              circleOneStroke='#d9edfe'
              circleTwoStroke='red'
            />
          </div>
        </div>

      </MarginBar>

      <MarginBar title="Top Fluctuating Recipes" >

        <div style={{ display: 'flex', marginLeft: '30px' }}>
          <div style={style1}>
            <p className="text-recipe-name" style={{marginBottom:'33%'}}>
              Ambur Biryany
            </p>
            
            <div style={{ margin:'15% 15%', backgroundColor:'lightgray', height:"2px"}} />
           
            <p className="text-increase-rate"> 5 % </p>

          </div>

          <div style={style1}>
            <p className="text-recipe-name">Paneer Tikka Masala</p>
            {/* <div style={{ margin:'15% 15%', backgroundColor:'lightgray', height:"2px"}} /> */}
            <hr/>
            <p className="text-decrease-rate"> 2 % </p>
          </div>

          <div style={style1}>
            <p className="text-recipe-name">Palak Paneer Butter Masala</p>
            <div style={{ margin:'15% 15%', backgroundColor:'lightgray', height:"2px"}} />
            <p className="text-decrease-rate"> 3 % </p>
          </div>
        </div>
      </MarginBar>


    </div>
  );
}

export default MarginComponent;
