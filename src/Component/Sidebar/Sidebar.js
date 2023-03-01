import React from 'react';
import './sidebar.css'

function Sidebar(){
    return(
        
   <div className="main_sidebar_div">
    <div className='green_div'>
    <img src='../images/green.png'/>
    </div>
    <div className='plus_sign'>
    <img src='../images/+.png'/>
    
    </div>
    <div className='plus_sign'>
    <img src='../images/patient.png'/>
    <h6>patient</h6>
    </div>
    <div className='plus_sign'>
    <img src='../images/folder.png'/>
    <h6>folder</h6>
    </div>
    <div className='plus_sign'>
    <img src='../images/upload.png'/>
    <div>
    <h6>upload</h6>
    </div>
    </div>
    <div className='plus_sign'>
    <img src='../images/report.png'/>
    <h6>Report</h6>
    </div>
    <div className='plus_sign'>
    <img src='../images/settings.png'/>
    <h6>Settings</h6>
    </div>
    <div className='plus_sign'>
    <img src='../images/logout.png'/>
    <h6>Logout</h6>
    
    </div>
    </div>
   
)} ;
export default Sidebar;     