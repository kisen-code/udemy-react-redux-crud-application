import React, {Component} from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {count:0}
  }

  handleplus = () =>{
    console.log(this.state.count);
    this.setState({count: this.state.count + 1});
  }

  handlemin = () => {
    this.setState({count:this.state.count-1})
  }

  render() {
    return (
      <React.Fragment>
        <div>count:{this.state.count}</div>
        <button onClick = {this.handleplus}>+1</button>
        <button onClick = {this.handlemin}>-1</button>
      </React.Fragment>
      )
  }

}

export default App;
