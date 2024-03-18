import './App.css'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from './UserList'

function App() {

  return (
      <>
      <Router>
          <NavBar />
          <div className="container">
              <SideBar />
              <Switch>
                  <Route exact path="/">
                  <Home />
                  </Route>
                  <Route path="/users">
                      <UserList />
                  </Route>
              </Switch>
              </div>
          </Router>
    </>
  )
}

export default App
