import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { createBrowserHistory } from "history"
import { Router, Route, Switch, Redirect } from "react-router-dom"

import "assets/css/nucleo-icons.css"
import "assets/scss/blk-design-system-react.scss?v=1.1.0"
import "assets/demo/demo.css"

import Index from "views/Index.js"
import Item from "views/item/Index.js"
import Deals from "views/deals/Index.js"
import Category from "views/category/Index.js"
import Manufacturer from "views/manufacturer/Index.js"

import ReactGA from "react-ga"

ReactGA.initialize("UA-172881277-1")
const browserHistory = createBrowserHistory()
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search)
})

const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path='/index' render={(props) => <Index {...props} />} />
        <Route exact path='/item/:id' render={(props) => <Item {...props} />} />
        <Route path='/deals' render={(props) => <Deals {...props} />} />
        <Route
          exact
          path='/categories/:category'
          render={(props) => <Category {...props} />}
        />
        <Route
          exact
          path='/manufacturers/:manufacturer'
          render={(props) => <Manufacturer {...props} />}
        />
        <Redirect from='/' to='/index' />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
