import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Message.css";

function Message() {
  const user = useSelector(selectUser);
 
  return (
    <div className='message'>
        <Avatar src={user.photo}/>
        <div className='messageInfo'>
            <h4>
                {user.displayName}
                <span className='messageTimestamp'>this is a timestamp</span>
            </h4>
            <p>This feature shall bring blessings in the future. All you have to do is... prey</p>
        </div>
    </div>
  )
};

export default Message;