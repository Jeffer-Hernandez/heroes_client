import React from 'react'
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {fetchHeroes} from './actions/fetchHeroes'


class App extends React.Component {



  render(){
    return (
      <div className="App">
        App
      
      </div>
    );
  }
}


export default connect()(App);
