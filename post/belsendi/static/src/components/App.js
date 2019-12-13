import React, { Component, Fragment } from 'react';
import Header from './Header/Header'
import Post from './Post/Post'
import Footer from './Footer/Footer'
import Digest from './Digest/Digest'
import Calendar from './Calendar/Calendar'
import Login from './Auth/Login'
import Register from './Auth/Register'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import PrivateRoute from './common/PrivateRoute'
import store from '../store'
import { loadUser } from '../actions/auth'
import Favorites from './Favorites/Favorites'

class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return(
            <Router>
                <Provider store={store}>
                    <Fragment>
                        <Header/>
                        <Switch>
                            <PrivateRoute exact path="/" component={Post}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/digest" component={Digest}/>
                            <PrivateRoute exact path="/favorites" component={Favorites}/>
                            <PrivateRoute exact path="/calendar" component={Calendar}/>
                        </Switch>
                        <Footer/>
                    </Fragment>
                </Provider>
            </Router>
        )
    }
} 

ReactDOM.render(<App/>, document.getElementById('root'));


