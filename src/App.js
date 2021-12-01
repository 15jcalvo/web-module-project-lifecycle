import React from 'react';
import User from './components/User';

class App extends React.Component {
  render() {
    return(
    <div>
      <h1>GITHUB INFO</h1>
      <div>
        <input 
          type='text'
          name='search'
        />
        <button>Search</button>
      </div>
      <User/>
    </div>);
  }
}

export default App;
