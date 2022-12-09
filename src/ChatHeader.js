import React from 'react';
import "./ChatHeader.css";

function ChatHeader() {
  return (
    <div className='chatHeader'>
        

        <div className='chatHeader_right'>
            <div className='chatHeader_search'>
                <form>
                    <input className='chat-search' placeholder='What is it you seek?' />
                </form>
            </div>
        </div>
    </div>
  )
};

export default ChatHeader;