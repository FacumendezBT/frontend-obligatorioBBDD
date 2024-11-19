import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import TopBar from '../components/TopBar';

const LayoutedRoute = () => {
  
    return <div className="colducuApp">
        <TopBar />
        <div className="colducuContent">
            <Outlet />
        </div>
        <NavBar />
    </div>;
};

export default LayoutedRoute;
