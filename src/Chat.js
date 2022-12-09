import React from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import Message from './Message';

function Chat() {
  return (
    <div className='chat'>
      
      <h1>GOTM CHAT</h1>

        <div className='goTm-chat-header'>
          <ChatHeader/>  
        </div>
        
        <div className='chatMessages'>
          <Message />
        </div>

        <div className='chatInput'>
            <form>
                <input className='inputs'placeholder={`Message`} />
                <button className='chatInputButton' type='submit'></button>
            </form>
        </div>
    </div>
  )
};

export default Chat;