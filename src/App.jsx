import React from 'react'
export default class App extends React.Component {
  tab = ['a', 'b', 'c', 'd', 'e'];
  state = {
    p1: this.tab[0],
    p2: this.tab[1],
    p3: this.tab[2],
    p4: this.tab[3],
    p5: this.tab[4]
  }
  stateL = Object.keys(this.state).length;
  removeEl = () => {
    delete this.state[Object.keys(this.state)[0]];
    this.stateL = Object.keys(this.state).length;
    this.backgrounding(this.stateL)
    this.setState({});
  }
  backgrounding = (len) =>{
    if (len === 1 ) {
      document.body.style = "background-color : orange"
    }else if (len === 0) {
      document.body.style = "background-color : red"
    }
  }
  render() {
    return (
      <div>
        <p>{this.stateL}</p>
        <button onClick={this.removeEl}>Remove Element</button>
      </div>
    );
  }
}

