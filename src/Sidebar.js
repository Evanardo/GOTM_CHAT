import { Avatar } from '@mui/material';
import React from 'react';
import "./Sidebar.css";
import SidebarChannel from './SidebarChannel';


function Sidebar() {
  return (
      <div className='sidebar'>
          {/* <h2>GOTM</h2> */}

          <div className='sidebar__top'>
              <h3>GOTM Devotional</h3>
          </div>

          <div className='sidebar__channels'>
              <div className='sidebar__channelsHeader'>
                  <div className='sidebar__header'>
                      <h4>Text Channels</h4>
                  </div>

              </div>

              <div className='sidebar__channelsList'>
                  <SidebarChannel />
              </div>


          </div>
          
          <div className='sidebar__profile'>
              <Avatar />
              <div className='sidebar__profileInfo'>
                  <h3>last.elixir</h3>
              </div>
          </div>

      </div>
  )
}

export default Sidebar