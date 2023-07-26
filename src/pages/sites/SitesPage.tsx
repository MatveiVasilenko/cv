import { useEffect } from 'react';
import { useAppDispatch } from 'src/app/store';
import { setDisplaingMobileModule, setMainPage } from 'src/entities/core/slices/coreSlice';
import SiteExtendedList from 'src/entities/site/ui/SiteExtendedList';

const SitesPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    dispatch(setMainPage(false));
    dispatch(setDisplaingMobileModule(false));
  }, []);
  return (
    <div>
      <SiteExtendedList />
    </div>
  )
};

export default SitesPage;