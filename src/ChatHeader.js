import React from 'react';
import "./ChatHeader.css";

function ChatHeader() {
  return (
    <div className='chatHeader'>
        <div className='chatHeader__left'>
            <h3>
                <span className='chatHeader__hash'>#</span>
                Test Channel Name
            </h3>
        </div>

        <div className='chatHeader__right'>
            <div className='chatHeader__search'>
                <form>
                    <input className='chat-search' placeholder='What is it you seek?' />
                </form>
            </div>
        </div>
    </div>
  )
}

export default ChatHeader;