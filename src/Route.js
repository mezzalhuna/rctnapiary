import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home'
import About from './About'
import Login from './Login'

const Routes = () => (
   <Router>
      <Scene key = "root">
            <Scene key = "login" component = {Login} hideNavBar initial = {true} />
            <Scene key = "home" component = {Home} title = "Home"  />
            <Scene key = "about" component = {About} title = "About" />
      </Scene>
   </Router>
)
export default Routes