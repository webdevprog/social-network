import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className="main-header">
        <img src="https://cdn.pixabay.com/photo/2016/08/25/07/30/orange-1618917_960_720.png" alt="" className="logo" />
        <h1>Logo text</h1>
      </header>
      <aside className="sidebar-left">
        <nav>
          <ul>
            <li><a href="">Profile</a></li>
            <li><a href="">Messages</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Music</a></li>
            <li><a href="">Setting</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <div>
          <img className="banner" src="https://cdn.pixabay.com/photo/2020/02/23/11/36/landscape-4873098_960_720.jpg" alt="" />
        </div>
        <div className="user">
          <img className="user__avatar" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
          <div className="user-info">
            <div className="user-info__name">Vitaliy</div>
            <div className="user-info__datebirth">Date of Birth: 7 november</div>
            <div className="user-info__city">City: Sevastopol</div>
            <div className="user-info__education">Education: SEVGU '18</div>
            <div className="user-info__website">Web Site: none</div>
          </div>
        </div>
        <form className="form-post" action="">
          <legend>
            <h2>My posts</h2>
          </legend>
          <textarea placeholder="your news" name="" id="" cols="30" rows="10"></textarea>
          <input type="submit" value="Send" />
        </form>
        <div>
          <div>
            <img src="" alt=""/>
            <div>
              Hello, everyone!
            </div>
          </div>
        </div>
      </main>
      <footer className="main-footer">
        footer
      </footer>
    </div>
  );
}

export default App;
