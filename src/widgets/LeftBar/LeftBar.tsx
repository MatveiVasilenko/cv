import { FC } from 'react';
import ProjectsList from 'src/entities/project/ui/ProjectsList';
import SiteList from 'src/entities/site/ui/SiteList';
import ContactList from 'src/entities/user/ui/ContactList';
import meImg from 'src/assets/me.jpg';
import { twMerge } from 'tailwind-merge';

interface ILeftBarProps {
  className?: string;
};

const LeftBar:FC<ILeftBarProps> = ({
  className,
}) => {
  return (
    <div className={twMerge('w-[25%] bg-grey-light', className)}>
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