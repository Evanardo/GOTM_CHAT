import { Avatar, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import db from './FirebaseConfig';
import "./Sidebar.css";
import SidebarChannel from './SidebarChannel';
import { auth } from './FirebaseConfig';
// import Eastward from './Eastward.avif';
import smt from './shin-megami-tensei-iii-nocturne-hd-remaster-face.jpg';


function Sidebar() {
    const user = useSelector(selectUser);



    return (
        <div className='sideNav'>
            


            <div className='sideNav_top'>
                <div className="card">
                    <div className="card-body">

                        <h6 className="card-text">Current Game of the Month</h6>

                        <div className='curLast-month'>
                            <h3 className="gotm-title">SMT III Nocturne</h3>
                        </div>

                    </div>

                    <img className="card" alt='' src={smt} />

                </div>
            </div>

            <div className='sidebarSpacer'></div>

            <div className='sideNav_profile'>
                <Avatar src={user.photo} />
                <div className='sideNav_profileInfo'>
                    <h3>{user.displayName}</h3>
                </div>
            </div>

            <div className='sideNav_top'>
                <Button onClick={() => auth.signOut()}>sign out</Button>
            </div>

        </div>
    )
};

export default Sidebar;