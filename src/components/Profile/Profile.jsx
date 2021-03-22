import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
const Profile = () => {
    return <div>
    <div><img src='https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80' /></div>
    <div>
      ava + description
    </div>   
    <MyPosts /> 
  </div>
}




export default Profile;