import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import LeftBar from 'src/widgets/LeftBar/LeftBar';
import TopBar from 'src/widgets/TopBar/TopBar';

interface INavLayoutProps {

};

const NavLayout: FC<INavLayoutProps> = ({ }) => {
  return (
    <div className="my-10">
      <div className="container flex text-main text-green shadow-2xl">
        <LeftBar />
        <div className="flex-1 bg-white">
          <TopBar />
          <Outlet />
        </div>
      </div>
    </div>
  )
};

export default NavLayout;