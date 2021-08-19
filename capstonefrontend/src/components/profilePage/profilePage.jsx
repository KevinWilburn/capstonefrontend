import React from 'react'
import logo from './avatar.png'
import './profilePage.css'

export default function ProfilePage() {
    
    return (
        <>       
        <div className="profile-page">
            <div className="profile-container">
                <img className="profile-image"src={logo} alt="profile-pic" width="300" height="300" border-radius="50%"></img>
                <br/>
                <h2 calssName="username">
                    Username
                </h2>
            </div>
            <div className="form">
                <label className="label">My Bio</label>
                <br/>
                <textarea className="my-bio-container"/>
                <br/>
                <input className="submit-my-bio" type="button" value="Submit my bio"/>
            </div>
           </div> 
        </>
         
    )
}