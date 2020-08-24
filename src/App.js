import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.scss';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
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
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initializeApp: state.app.initialize
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initialize })
)(App);

const SocialNetwork = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    );
};

export default SocialNetwork;