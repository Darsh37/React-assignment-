import React from "react";
import { alignPropType } from "react-bootstrap/esm/types";
import "./profile.css"

const Box = ({ title, value, isFirstItem = false, isHistoryItem = false }) => {
    const firsItemProps = isFirstItem ? "no-left-border no-padding" : "";

    const display = isHistoryItem ? <div><div className="user-history-value">{value}</div><div className="user-history-title">{title}</div></div>
    : <div><div className="user-prop-title">{title}</div><div className="user-prop-value">{value}</div></div>

    return (
        <div className={`user-prop-flex-item ${firsItemProps}`}>
            {display}
        </div>
    );
}

const Profile = ({ item }) => {
    return (
        <div className="main-flex">
            <div className="main-flex-item">
                <div className="user-name">{item.name}</div>
                <div className="user-email">{item.email}</div>
            </div>
            <div className="main-flex-item">
                <div className="sub-flex-item">
                    <Box isFirstItem={true} title="Gender" value={item.gender}/>
                    <Box title="Birthday" value={item.birthdate}/>
                    <Box title="Phone Number" value={item.phone_number}/>
                    <Box title="Member Status" value={item.member_status}/>
                </div>
                <div className="sub-flex-item">
                    <Box isFirstItem={true} title="Past" value={item.past} isHistoryItem={true}/>
                    <Box title="Upcoming" value={item.upcoming} isHistoryItem={true}/>
                    <div>
                        <div className="user-item-links" >VIEW ECG</div>
                        <div className="user-item-links">REPORT</div>
                        <div className="user-item-links">DOCUMENTS</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile; 