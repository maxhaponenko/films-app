import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import s from './App.module.css';

const App = () => {
    return (
      <div className="appWrapper">
          <Header />
          <div className="wrapper">
              <div className={s.controls}>
                  <button className={`btn btn-sm blue-gradient ${s.btnAddFilm}`}>+ Add film</button>
              </div>
          </div>



          <Footer />
      </div>
    );
}

export default App;
