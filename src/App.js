import React from 'react'
import {Route} from 'react-router-dom'
import HeroContainer from './containers/HeroContainer'
import Welcome from './components/Welcome'
import About from './components/About'


class App extends React.Component {

  render(){
    return (
      <div className="App">
   
        <Route exact path='/' component={Welcome}/>
        <Route path='/about' component={About}/>
        <Route path='/heroes' component={HeroContainer}/>
       
      </div>
    );
  }
}


export default App
