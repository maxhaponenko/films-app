import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import s from './App.module.css';
import FilmsContainer from './components/Content/Films/FilmsContainer';
// import ModalAddFilmContainer from './components/Modals/ModalAddFilmContainer.js';

const App = (props) => {
    // debugger;
    
    
    return (
        <div className="appWrapper">
            <Header />
            <div className="wrapper">
                <Route path="/films" render={() => <FilmsContainer />}/>
                
                <Redirect from="/" exact to ="/films" />

            
            
            </div>
            {/* <ModalAddFilmContainer /> */}
            <Footer />
            
        </div>
    );
}

export default App;
