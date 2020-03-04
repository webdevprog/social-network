import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar state={props.state.sidebar} />
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile
                        store={props.store}
                    />} />
                    <Route path="/dialogs" render={() => <DialogsContainer
                        store={props.store}
                    />} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/setting" component={Setting} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
