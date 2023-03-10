import React from "react";
import "./profile.css"
import Sdata from "./Sdata";

console.log(Sdata[0].name);

const Box =(props)=>{
    return(
        <>
        <div className="box">
            <h6>{props.name}</h6>
            <p>{props.Val}</p>
        </div>       
        </>
           
    )

}

const Profile = () =>{
    return(
        <div className="profile">
          <Box
          name="Gender"
          Val={Sdata[0].gender}
          />
          <Box
          name="Bithdate"
          Val={Sdata[0].birthdate}/>
          <Box
           name="phone Number"
           Val={Sdata[0].phone_number}
          />
          <Box
           name="member Status"
           Val={Sdata[0].member_status}
          />
        </div>
    
    )
}

export default Profile; 