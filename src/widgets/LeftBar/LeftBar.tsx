import React, { FC } from 'react';
import ProjectsList from 'src/entities/project/ui/ProjectsList';
import SiteList from 'src/entities/site/ui/SiteList';
import ContactList from 'src/entities/user/ui/ContactList';
import meImg from 'src/assets/me.jpg';

interface ILeftBarProps {

};

const LeftBar:FC<ILeftBarProps> = ({}) => {
  return (
    <div className="w-[25%] bg-grey-light">
      <img
        src={meImg}
        alt="me"
      />
      <ContactList />
      <ProjectsList />
      <SiteList />
      {/* <div>Hobby Projects</div> */}
    </div>
  )
};

export default LeftBar;