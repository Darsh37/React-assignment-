import React from 'react';
import './sidebar.css'

function Comp(){
    return(
        <div className='image-style'>
        <img src='../images/+.png'/>
        <h6>new</h6>
        </div>
    )

};

function Sidebar(){
    return(     
   <div className="main_sidebar_div">
    <div className='green_div'>
    <img src='../images/logo.png'/>
    </div>
   <Comp/>
   <Comp/>
   <Comp/>
   <Comp/>

    </div>
   
)} ;
export default Sidebar;     