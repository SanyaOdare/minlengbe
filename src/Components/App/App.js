import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{ name: 'name1', artist: 'artist1', album: 'album1', id: 1 }, { name: 'name2', artist: 'artist2', album: 'album2', id: 2 }, { name: 'name3', artist: 'artist3', album: 'album3', id: 3 }],
        playListName: 'My PlayList',
        playListTracks: [{ name: 'playListName1', artist: 'playListArtist1', album: 'playListAlbum1', id: 4 }, {name: 'playListName2', artist: 'playListArtist2', album: 'playListAlbum2', id: 5 }, { name: 'playListName3', artist: 'playListArtist3', album: 'playListAlbum3', id: 6 }]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playListTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playListTracks: tracks })

  }

  removeTrack(track) {
    let tracks = this.state.playListTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({ playListTracks: tracks });
  }

  updatePlayListName(name) {
    this.setState({ playListName: name});
  }

  savePlayList() {
    const trackUris = this.state.playListTracks.map(track => track.uri);
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>min<span className="highlight">len</span>gbe</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
              onAdd={this.addTrack} />
            <Playlist playListName={this.state.playListName}
              playListTracks={this.state.playListTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlayListName}
              onSave={this.savePlayList} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
