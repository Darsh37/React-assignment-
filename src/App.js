import React  from 'react';
import Sidebar from './Component/Sidebar/Sidebar';
import Profile from './Component/Profile/Profile';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sdata from "./Component/Profile/Sdata";

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

  <div className="main-app">

    <div className='sidebar-flex'> <Sidebar/></div>
   
   <div className='sub-flex'>
  
  <div className='searchbar-flex'>
  <Searchbar/>
  </div>
  
  <div className='profile-flex'>
  {Sdata.map((element) => (
    <Profile item={element} />
  ))}
  </div>
  </div>
  </div>

 </>
)
};

export default App;
