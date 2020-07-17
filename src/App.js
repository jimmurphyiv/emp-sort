import React, {Component} from 'react';
import './App.css';
import Data from './Components/Data';
import Box from './Components/Box';
import Header from './Components/Header';





class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 1,
      item: Data.id,

    }
  }
    handleNext=(e)=>{
     this.setState({
       counter:this.state.counter+1
     })


  }

  handlePrev=(e)=>{
    this.setState({
      counter:this.state.counter-1
    })


 }

  render() {
    const { counter } = this.state
    let output = [];
    if(counter === 25 && counter === 0){
      this.setState({
        counter: 1
      })
    }
    output = (Data).filter((e, i) => e.id === this.state.counter)
    

    const mappedArray = Data.map((element, i) => {
    
      return  <div key={i} element={element}></div>      

    })
  return (
    <div>
      {mappedArray}
      <Header/>
      <Box output={output}/>
      <div className="btn">
        <button onClick={(e)=> this.handleNext(e)}>Next</button>
        <button onClick={(e)=> this.handlePrev(e)}>Previous</button>
      </div> 
    </div>
  );
}
}

export default App