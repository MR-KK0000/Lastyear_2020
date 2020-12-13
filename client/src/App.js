import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import view
import NotFoundPage from './views/NotFoundPage'
import Home from './views/HomePage'
import Register from './views/RegisterPage'

const app = () =>{
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/" component={Register}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </Router>
    </div>
  )
}

export default app