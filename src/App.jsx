import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FilmsContainer from './components/Content/Films/FilmsContainer';
import PersonsContainer from './components/Content/Persons/PersonsContainer';

const App = () => {
    return (
        <div className="appWrapper">
            <Header />
            <div className="wrapper">
                <Route exact path="/" render={() => (
                    <Redirect to="/persons" />
                )} />
                <Route path="/films" render={() => <FilmsContainer />} />
                <Route path="/persons" render={() => <PersonsContainer />} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
