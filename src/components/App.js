import React from 'react';
import Header from './Header';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests25'
  };
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          ...
        </div>
      </div>
    );
  }
}

export default App;
