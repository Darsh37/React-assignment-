import React  from 'react';
import Sidebar from './Component/Sidebar/Sidebar';
import Profile from './Component/Profile/Profile';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Searchbar from './Component/Profile/Searchbar';
// const cardStyles = {
//   container: {
//   display : "flex",
//   flexdirection: "column",
// },
// }
function App() {
  return (
    <>

  <div className="App">
  <Sidebar></Sidebar>
  
  <div className='main_div'>
  
  <div className='searchbar_div'>
  <Searchbar></Searchbar>
  </div>
  
  <div className='profile_div'>
  <Profile ></Profile>
  <Profile></Profile>
  <Profile></Profile>
  <Profile></Profile>
  <Profile></Profile>
  </div>

  </div>
  </div>

 </>

  )
};

export default App;
