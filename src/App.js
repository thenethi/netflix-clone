import {Switch, Route, Redirect} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'
import Home from './components/Home'
import Popular from './components/Popular'
import MovieDetailsView from './components/MovieDetailsView'
import Search from './components/Search'
import Account from './components/Account'
import ProtectedRoute from './components/ProtectedRoute'
import ProfileData from './components/ProfileData'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/login" component={LoginRoute} />
    <ProtectedRoute exact path="/popular" component={Popular} />
    <ProtectedRoute exact path="/movies/:id" component={MovieDetailsView} />
    <ProtectedRoute exact path="/search" component={Search} />
    <ProtectedRoute exact path="/account" component={Account} />
    <ProtectedRoute exact path="/profilepage" component={ProfileData} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
