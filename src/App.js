import React, { Component } from 'react';

import './App.css';



import Header from './components/Header'
import Cfooter from './components/Cfooter'
import Cards from './components/Cards';
import Meetings from './components/Meetings';

class App extends Component {


  render(){



    return (
    <div className="App">
   
      {/* <Routes>
              <Route path="/Homepage" element={<Homepage/>}></Route>
              
              <Route path="/Shop" element={<Shop/>}></Route>
              <Route path="/Players" element={<Players/>}></Route>
              <Route path="/" element={<Homepage/>}></Route>
              <Route path="/Create" element={<Create/>}></Route>
              <Route path="/News" element={<News/>}></Route>
              
            
              
            </Routes> */}
            <div className='piic'>
            <Header/>
            </div>
            
            <Cards/>
            <Meetings/>
            <Cfooter/>
            
        
          </div>      
        
        
          
    
    
      
  );
  }
}

export default App;
