import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>min<span className="highlight">len</span>gbe</h1>
        <div className="App">
          <SearchBar component />
          <div className="App-playlist">
            {/* <SearchResults component /> */}
            {/* <Playlist /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
