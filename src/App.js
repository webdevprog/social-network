import React from 'react';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import './App.scss';
import ProfileContainer from './components/Profile/ProfileContainer';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initialize } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (this.props.initializeApp) return <Preloader />

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer />
                    <NavbarContainer />
                    <div className="app-wrapper-content">
                        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                        <Route path="/dialogs" render={() => <DialogsContainer />} />
                        <Route path="/users" render={() => <UsersContainer />} />
                        <Route path="/news" component={News} />
                        <Route path="/music" component={Music} />
                        <Route path="/setting" component={Setting} />
                        <Route path="/login" component={Login} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initializeApp: state.app.initialize
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initialize})
)(App);