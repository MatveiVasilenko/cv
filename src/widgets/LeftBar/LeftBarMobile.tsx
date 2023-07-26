import { useAppDispatch, useAppSelector } from 'src/app/store';
import { selectDisplaingMobileModule, setDisplaingMobileModule } from 'src/entities/core/slices/coreSlice';
import ProjectsList from 'src/entities/project/ui/ProjectsList';
import SiteList from 'src/entities/site/ui/SiteList';
import ContactList from 'src/entities/user/ui/ContactList';
import { ButtonLink } from 'src/shared/ButtonLink';
import { twMerge } from 'tailwind-merge';

const LeftBarMobile = () => {
  const displaingMobileModule = useAppSelector(selectDisplaingMobileModule);
  const dispatch = useAppDispatch();

  const closeMenu = () => {
    dispatch(setDisplaingMobileModule(false));
  };

  return (
    <>
      <div className={twMerge(
        'w-full bg-grey-light fixed right-full top-0 z-20 transition-all opacity-0',
        displaingMobileModule && 'right-0 left-0 opacity-100'
      )}>
        {displaingMobileModule === 'contacts' && (
          <ContactList />
        )}
        {displaingMobileModule === 'projects' && (
          <ProjectsList />
        )}
        {displaingMobileModule === 'sites' && (
          <SiteList />
        )}
        <ButtonLink onClick={closeMenu} className="p-4" type="back">
          Back
        </ButtonLink>
      </div>
      {displaingMobileModule && <div className="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 right-0 bottom-0 z-10" />}
    </>
  )
};

export default LeftBarMobile;