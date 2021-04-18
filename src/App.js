import React from 'react'
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {fetchHeroes} from './actions/fetchHeroes'


class App extends React.Component {

  componentDidMount(){
    this.props.fetchHeroes()
  }

  render(){
    return (
      <div className="App">
        App
      
      </div>
    );
  }
}

// const mapStateToProps (state) =>{
//   return {
//     heroes: state.heroes
//   }
// }

export default connect(null, {fetchHeroes})(App);
