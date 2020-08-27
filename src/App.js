import React, { lazy } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import './App.scss';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import withSuspense from './hoc/withSuspense';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initialize } from './redux/app-reducer';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';


const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));

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
                    <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
                    <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
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
    connect(mapStateToProps, { initialize }),
    withRouter
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