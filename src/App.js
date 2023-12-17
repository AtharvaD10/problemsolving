import React, {useState} from 'react';
import './App.css';

// import Problemone from './components/Problemone';
import Problemtwo from './components/Problemtwo';
function App() {
  const[UIcolor, setUIcolor] = useState(null);

  const getColor = (color)=> {
        setUIcolor(color);
  };

  return(
   
    <div className='App'>
      <div className='App_color_container'
       style={{background: `${UIcolor}`}}
      ></div>
       {/* <Problemone/> */}
        <Problemtwo getColor={getColor}/>
    </div>
      
  )
}

export default App;
