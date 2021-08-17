import React from 'react'
import NavBar from './components/navbar/navbar'
import LoginPage from './components/loginPage/loginPage'
import HomePage from './components/homePage/homePage'
import ProfilePage from './components/profilePage/profilePage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import OutFitPage from './components/outFitPage/outFitPage'
import Closet from './components/closet/closet'

export default function App() {
    return (
        <Router>        
        <div>
            <NavBar/>
            <Switch>

            <Route path ='/home' component={HomePage}/>
            <Route path ='/loginpage' component={LoginPage}/>
            <Route path ='/profilepage' component={ProfilePage}/>
            <Route path ='/outfitpage' component={OutFitPage}/>
            <Route path ='/closet' component={Closet}/>
            </Switch>

        </div>
        </Router>
    )
}
