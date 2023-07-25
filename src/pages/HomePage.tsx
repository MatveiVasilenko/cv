import React, { FC } from 'react';
import ContactList from 'src/entities/user/ui/ContactList';
import Educations from 'src/widgets/Educations/Educations';
import Experiences from 'src/widgets/Experiences/Experiences';
import HardSkills from 'src/widgets/HardSkills/HardSkills';
import Mission from 'src/widgets/Mission/Mission';
import Profile from 'src/widgets/Profile/Profile';
import SoftSkills from 'src/widgets/SoftSkills/SoftSkills';

interface IHomePageProps {


};

const HomePage: FC<IHomePageProps> = ({ }) => {
  return (
    <div>
      <HardSkills />
      <Profile />
      <Experiences />
      <Educations />
      <SoftSkills />
      <Mission />
      <ContactList
        variantContentBlock="secondary"
        classNameCard="flex-row gap-10 px-10 py-8"
      />
    </div>
  )
};

export default HomePage;