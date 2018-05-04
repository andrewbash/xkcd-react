import React from 'react';
import './App.css';
import Comic from './components/Comic'
import SetComic from './components/SetComic'



class App extends React.Component {
  state = {
    comicData: {}
  };

  getComic = (num) => {
    // If there is no `num` param get the default url, otherwise load in the specific number
    const url = 'https://xkcd.now.sh/' + (num ? num : '');
    fetch(url)
      .then(res => res.json())
      .then((out) => {
        this.setState({
          comicData: out
        })
      })
      .catch(err => { throw err });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">XKCD-react</h1>
        </header>
        <SetComic getComic={this.getComic} currentComic={this.state.comicData.num}/>
        <Comic comicData={this.state.comicData}/>
      </div>
    );
  }
  componentDidMount() {{this.getComic()}};
  
}

export default App;
