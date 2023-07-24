import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface IHomePageProps {

};

const HomePage: FC<IHomePageProps> = ({ }) => {
  return (
    <div>
      <div>HomePage</div>
    </div>
  )
};

export default HomePage;