import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";


import './App.css'
import Navbar from './component/Navbar'

import Home from './component/Home'
import About from './component/About'
import Profile from './component/Profile'

class App extends React.Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App" >

          <Navbar />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/:profile_id" component={Profile} />

        </div>
      </BrowserRouter>
    )
  }
}


export default App