import React from 'react';
import './Profile.css';

const Profile = ({ avatar, username, bio }) => {
    return (
        <div className="profile-container">
            <img src={avatar} alt="Avatar" className="profile-avatar" />
            <div className="profile-username">{username}</div>
            <p className="profile-bio">{bio}</p>
        </div>
    );
};

export default Profile;
