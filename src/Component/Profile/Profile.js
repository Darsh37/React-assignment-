import React from "react";
import { ReactDOM } from "react";
import Card from 'react-bootstrap/Card';


// ReactDOM.render(
//     <>
//     <div className="text_div">
//         <h3>Hi</h3>
//         <h6></h6>

//     </div>

//     </>,
//     document.getElementById('root')
// );

const Profile = () =>{
    return(
        <>    
        <Card body style={{ outline:"none", display:"flex",flexdirection: "row" }}>
        <div className="text_div" style={{ display: "flex", flexdirection: "column" }}>
        <lable>Diance Cooper  diancecooper@gmail.com<br/>
        <label>Gender <br/>female</label>
        <img src="../images/sLine.png" style={{height:50, width:2, paddingLeft:50}}></img>
        <label>Birthday <br/>030/7/1995</label>
        <img src="../images/sLine.png" style={{height:50,width:2,paddingLeft:50}}></img>
        <label>Phone Number <br/>8169730338</label>
        <img src="../images/sLine.png" style={{height:50,width:2, paddingLeft:50}}></img>
        <label>Member Status <br/>Active</label>
        </lable>
        </div>
        </Card>
 
        </>
    )
}
export default Profile;