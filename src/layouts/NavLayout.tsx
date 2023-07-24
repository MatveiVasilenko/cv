import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import LeftBar from 'src/widgets/LeftBar/LeftBar';

interface INavLayoutProps {

};

const NavLayout:FC<INavLayoutProps> = ({}) => {
  return (
    <div className="container flex">
      <LeftBar />
      <div className="flex-1">
        <div>Matvii Vasylenko</div>
        <Outlet />
      </div>
    </div>
  )
};

export default NavLayout;