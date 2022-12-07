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
        
        <div className='chat__messages'>
          <Message />
        </div>

        <div className='chat__input'>
            <form>
                <input placeholder={`Sermon`} />
                <button className='chat__inputButton' type='submit'></button>
            </form>
        </div>
    </div>
  )
}

export default Chat