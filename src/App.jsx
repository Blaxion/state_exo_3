import React from 'react'
export default class App extends React.Component{
  
  state={
    myTab:['a','b','c','d','e'],
    myTabL:5
  }
  
  removeEl = () =>{
    
    this.setState = ({
      myTab  : this.state.myTab.pop(),
      myTabL : this.state.myTab.length
    })
    console.log(this.state.myTab.length)
    console.log(this.state.myTab)
    
  }
  
  render() {
    return(
      <div>
        <p>{this.state.myTab}</p>
        <button onClick={this.removeEl}>Remove Element</button>
      </div>
    );
  }
}

