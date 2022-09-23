import React from 'react';
import axios from 'axios';
import './App.css';

//components
import Admin from '../Admin/Admin';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

function App() {

  return ( //in order of loading for user
    <div className='App'>
      <Header/>
      <Feeling/>
      <Understanding/>
      <Support/>
      <Comments/>
      <Review/>
      <Success/>
      <Admin/>
    </div>
  );
}

export default App;
