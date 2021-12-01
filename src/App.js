import React from 'react';
import User from './components/User';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: 'tetondan',
      userProxy: 'tetondan',
    }
  }
  handleChange = (e) => {
    this.setState({
      ...this.state,
      user: e.target.value
    })
  }
  handleClick = (e) =>{
    e.preventDefault();
    this.setState({
      ...this.state,
      userProxy: this.state.user
    })
  }
  render() {
    return(
    <div>
      <h1>GITHUB INFO</h1>
      <div>
        <input 
          type='text'
          name='search'
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Search</button>
      </div>
      <User user={this.state.userProxy}/>
    </div>);
  }
}

export default App;
