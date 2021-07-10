import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { HomeScreen } from './HomeScreen';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={ HomeScreen }/>
                    <Route exact path="/about" component={ AboutScreen }/>
                    <Route exact path="/login" component={ LoginScreen }/>

                    <Route component={ HomeScreen }/>
                    {/* otra forma de redirigir por default
                    <Redirect to="/"/> */}
                </Switch>
            </div>
        </Router>
    )
}
