import React, {Component} from 'react';
import './reset.css';
import './App.css';
import Data from './Components/Data';
import Box from './Components/Box';
import data from './Components/Data';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {

      employee: data.id,
    

    }
  }





  render() {

    
 
    const mappedEmp = this.state.Data.map((Data) => {
      return(
        <div>
          {Data.id}
        </div>
      )
  })

  
    return (
        <div>
          {mappedEmp}
        </div>
    );
  }
}


export default App
