import { Avatar, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import db from './FirebaseConfig';
import "./Sidebar.css";
import SidebarChannel from './SidebarChannel';
import { auth } from './FirebaseConfig';


function Sidebar() {
    const user = useSelector(selectUser);



    return (
        <div className='sidebar'>


            <div className='sidebar__top'>
                <Button onClick={() => auth.signOut()}>sign out</Button>
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

        </div>
    )
};

export default Sidebar;