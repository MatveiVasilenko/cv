import { Outlet } from 'react-router-dom';
import LeftBar from 'src/widgets/LeftBar/LeftBar';
import LeftBarMobile from 'src/widgets/LeftBar/LeftBarMobile';
import TopBar from 'src/widgets/TopBar/TopBar';

const NavLayout = () => {
  return (
    <div className="my-10">
      <div className="container-custom flex text-main text-green shadow-2xl">
        <LeftBar
          className="hidden md:block"
        />
        <LeftBarMobile />
        <div className="flex-1 bg-white">
          <TopBar />
          <Outlet />
        </div>
      </div>
    </div>
  )
};

export default NavLayout;