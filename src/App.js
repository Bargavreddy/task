import React, { Component } from 'react';
import './App.css';
import TextList from './components/textList/text-list'

class App extends Component {
  render() {
    return (
      <div className="ui container">
       <TextList/>
      </div>
    );
  }
}

export default App;
