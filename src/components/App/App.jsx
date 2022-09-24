import React, { useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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

  //GET FLAGGED WORDS FROM DB, SEND TO REDUX
  const dispatch = useDispatch();
  const getWords = () => {
    axios({
        method: 'GET',
        url: '/feedback/flagged_words'
    })
    .then((response) => {
        console.log('Sending words to Redux', response.data); //send list of words to Redux
        const action = {type: 'SET_FLAGGED_WORDS', payload: response.data};
        dispatch(action);
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
            <Comments/>
        </Route>
        <Route exact path="/review">
            <Review/>
        </Route>
        <Route exact path="/success">
            <Success/>
        </Route>
        <Route exact path="/admin">
            <Admin getWords={getWords}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
