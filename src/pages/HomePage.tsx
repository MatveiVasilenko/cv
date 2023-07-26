import { FC } from 'react';
import { useAppDispatch } from 'src/app/store';
import { setMainPage } from 'src/entities/core/slices/coreSlice';
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
  const dispatch = useAppDispatch();

  dispatch(setMainPage(true));
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
        classNameCard="md:flex-row flex-col gap-10 px-10 py-8"
      />
    </div>
  )
};

export default HomePage;