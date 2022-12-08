import React from 'react';
import "./SidebarChannel.css";


function SidebarChannel({ id, channel }) {
  return (
    <div className='sidebarChannel'>
        <h4>
            <a
            className='sidebarChannel__hash'
            href=''
            ></a>
            Back home
        </h4>
    </div>
  )
};

export default SidebarChannel;