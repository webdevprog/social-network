import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import Music from './components/Music/Music';


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/profile" component={Profile} />
                    <Route path="/dialogs" component={Dialogs} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/setting" component={Setting} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
