import MarginBar from './MarginBar';
import ProgressBar from './progressbar/ProgressBar';
import './progressbar/ProgressBar.css';
import { ReactComponent as ArrowDownIcon } from '../assets/arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from '../assets/arrow-up.svg';

const style1 ={maxWidth:'32%',
                display:'flex',
                 flexDirection: 'column',
                  justifyContent:'space-between',
                alignItems:'center',
              padding:'20px 5px'}

const MarginComponent = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

      <MarginBar title="High Margin Recipes" >

        <div style={{ display: 'flex', marginLeft: '30px' }}>
          <div style={style1}>
            <p className="text-recipe-name" style={{marginBottom:'35px'}}>Ambur Biryany</p>

            <ProgressBar
              progress={83}
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
              progress={79}
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
              progress={71}
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
              progress={17}
              size={80}
              strokeWidth={4}
              circleOneStroke='#d9edfe'
              circleTwoStroke='red'
            />
          </div>

          <div style={style1}>
            <p className="text-recipe-name">Paneer Tikka Masala</p>

            <ProgressBar
              progress={35}
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
              progress={16}
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

            <div>
            <hr style={{width:'100px', border:'1px solid lightgray'}}/>

            <div style={{display:'flex', flexDirection:'row'}}>
              <p className="text-decrease-rate"> 5 % <ArrowDownIcon/></p>
       
          </div>
          </div>
            
          </div>

          <div style={style1}>
            <p className="text-recipe-name">Paneer Tikka Masala</p>
            <div>
            <hr style={{width:'100px', border:'1px solid lightgray'}}/>
            <div style={{display:'flex', flexDirection:'row'}}>
            <p className="text-increase-rate"> 5 % <ArrowUpIcon /></p>
          </div>
         </div>
          </div>

          <div style={style1}>
            <p className="text-recipe-name">Palak Paneer Butter Masala</p>
            <div>
            <hr style={{width:'100px', border:'1px solid lightgray'}}/>
            <div style={{display:'flex', flexDirection:'row'}}>
              <p className="text-decrease-rate"> 3 % <ArrowDownIcon/></p>
       
          </div>
          </div>
           
          </div>
        </div>
      </MarginBar>


    </div>
  );
}

export default MarginComponent;
