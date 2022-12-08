import { Avatar, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import db from './FirebaseConfig';
import "./Sidebar.css";
import SidebarChannel from './SidebarChannel';
import { auth } from './FirebaseConfig';
import Eastward from './Eastward.avif'


function Sidebar() {
    const user = useSelector(selectUser);



    return (
        <div className='sidebar'>
            


            <div className='sidebar__top'>
              <div className="card">
                <div className="card-body">
                    <h6 className="card-text">Current Game of the Month</h6>
                    <div className='curLast-month'>

                        <h3 className="gotm-title">Eastward</h3>
                        {/* <Link className="gotm-title" to={`/games/${game.name}`} state= {{game: game}}>Eastward</Link> */}
                    </div>
                    
                </div>
                <img className="card" alt='' src={Eastward}/>

                </div>
            </div>

            <div className='sidebar__channels'>
                <div className='sidebar__channelsHeader'>
                    <div className='sidebar__header'>
                        {/* <Button>+</Button> */}
                    </div>

                </div>

                <div className='sidebar__channelsList'>
                    {/* {channels.map((channel) => ( */}
                    <SidebarChannel />


                </div>


            </div>

            <div className='sidebar__profile'>
                <Avatar src={user.photo} />
                <div className='sidebar__profileInfo'>
                    <h3>{user.displayName}</h3>
                    

                </div>
            </div>
            <div className='sidebar__top'>
                    <Button onClick={() => auth.signOut()}>sign out</Button>
            
                    </div>
        </div>
    )
};

export default Sidebar;