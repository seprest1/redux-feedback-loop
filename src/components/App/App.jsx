import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

//components
import Home from '../Home/Home';
import Admin from '../Admin/Admin';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

function App() {
  useEffect(() => {
    getWords();
  }, []);

  //GET FLAGGED WORDS FROM DB
  const [flaggedWords, setFlaggedWords] = useState([]);
  const getWords = () => {
    axios({
        method: 'GET',
        url: '/feedback/flaggedwords'
    })
    .then((response) => {
        console.log(response.data);
        setFlaggedWords(response.data);
    })
    .catch((error) => {
        console.log('Error getting flagged words from DB', error);
    });
  };

  return ( //in order of loading for user
    <div className='App'>
      <Header/>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/feelings">
            <Feeling/>
        </Route>
        <Route exact path="/understanding">
            <Understanding/>
        </Route>
        <Route exact path="/support">
            <Support/>
        </Route>
        <Route exact path="/comments">
            <Comments flaggedWords={flaggedWords}/>
        </Route>
        <Route exact path="/review">
            <Review/>
        </Route>
        <Route exact path="/success">
            <Success/>
        </Route>
        <Route exact path="/admin">
            <Admin flaggedWords={flaggedWords} getWords={getWords}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
