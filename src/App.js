import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import ProfileContainer from './components/Profile/ProfileContainer';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {
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
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;