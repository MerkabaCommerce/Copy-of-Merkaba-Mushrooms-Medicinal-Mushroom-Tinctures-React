import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Learn from './views/learn'
import Profile1 from './views/profile1'
import ComingSoon from './views/coming-soon'
import AboutUs from './views/about-us'
import Shop from './views/shop'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Learn} exact path="/learn" />
        <Route component={Profile1} exact path="/profile1" />
        <Route component={ComingSoon} exact path="/coming-soon" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={Shop} exact path="/shop" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
