import React, { FC } from 'react';
import ProjectsList from 'src/entities/project/ui/ProjectsList';

interface ILeftBarProps {

};

const LeftBar:FC<ILeftBarProps> = ({}) => {
  return (
    <div className="w-[25%] bg-grey-light">
      <div>Photo</div>
      <ProjectsList />
      <div>Sites</div>
      <div>Hobby Projects</div>
      <div>Contacts</div>
    </div>
  )
};

export default LeftBar;