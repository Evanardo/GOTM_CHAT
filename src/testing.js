import { Avatar } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './Chat.css';
import ChatHeader from './ChatHeader';
import { selectUser } from './features/userSlice';
import Message from './Message';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth } from './FirebaseConfig';
import db from './FirebaseConfig';
import { getAuth,GoogleAuthProvider } from 'firebase/auth'

function Chat() {
    const user = useSelector(selectUser);
    const dummy = useRef();
    const messagesRef = db.collection ('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id'});

    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();

        const {uid, photoURL} = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: db.FieldValue.serverTimestamp(),
            uid,
            photoURL,
        })

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth'});
    }



  return (
    <div className='chat'>
      
      <h1>GOTM CHAT</h1>
        <div className='goTm-chat-header'>

            <ChatHeader/>
            
        </div>
        
      <div className='chat__messages'>
        <Message />
        <div className='message'>
          <Avatar src={user.photo} />
          <div className='message__info'>
            <h4>
              {user.displayName}
              <span className='message__timestamp'>this is a timestamp</span>
            </h4>
            <p></p>
          </div>
        </div>
      </div>

        <div className='chat__input'>
            <form>
                <input className='inputs'placeholder={`Message`} />
                <button className='chat__inputButton' type='submit'></button>
            </form>
        </div>
    </div>
  )
};

export default Chat;