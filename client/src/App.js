import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import view
import NotFoundPage from './views/NotFoundPage'
import Home from './views/HomePage'

const app = () =>{
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </Router>
    </div>
  )
}

export default app