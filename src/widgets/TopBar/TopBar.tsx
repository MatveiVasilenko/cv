import { Link, useParams } from 'react-router-dom';
import { DEFAULT_LANG, TLang } from 'src/app/config';
import { STATIC_LANG_DATA } from 'src/app/lang';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { TDisplaingModule, selectMainPage, setDisplaingMobileModule } from 'src/entities/core/slices/coreSlice';
import LangSwitcher from 'src/features/LangSwitcher/ui/LangSwitcher';
import meImg from 'src/assets/me.jpg';
import { ButtonLink } from 'src/shared/ButtonLink';

const TopBar = () => {
  const { lang = DEFAULT_LANG } = useParams<{
    lang: TLang;
  }>();

  const mainPage = useAppSelector(selectMainPage);
  const dispatch = useAppDispatch();

  const openLeftBarMenu = (displayModule: TDisplaingModule) => {
    dispatch(setDisplaingMobileModule(displayModule));
  };

  return (
    <div className="text-green md:px-8 md:py-12 px-6 py-8 relative flex flex-col gap-2">
      <div className="w-[100px] h-[100px] rounded-[50%] overflow-hidden md:hidden block">
        <img src={meImg} alt="" />
      </div>
      <div>
        <div className="font-bold md:text-5xl text-3xl uppercase">
          {STATIC_LANG_DATA.myName[lang]}
        </div>
        <div>
          <div>Senior Frontend Developer (React) 5+</div>
          <div>Junior+ Backend Developer</div>
          <div>CTO | 5 projects</div>
        </div>
      </div>
      <div className="md:hidden block">
        <ButtonLink
          onClick={() => openLeftBarMenu(TDisplaingModule.CONTACTS)}
        >
          {STATIC_LANG_DATA.contacts[lang]}
        </ButtonLink>
        <ButtonLink
          onClick={() => openLeftBarMenu(TDisplaingModule.PROJECTS)}
        >
          {STATIC_LANG_DATA.projects[lang]}
        </ButtonLink>
        <ButtonLink
          onClick={() => openLeftBarMenu(TDisplaingModule.SITES)}
        >
          Sites
        </ButtonLink>
      </div>
      <LangSwitcher activeLang={lang} />
      {mainPage && (
        <div className="absolute right-10 bottom-10 font-semibold">CV</div>
      )}
      {!mainPage && (
        <Link to={`/${lang}`} className="absolute right-10 bottom-10 font-semibold">
          Back to CV
        </Link>
      )}
    </div>
  )
};

export default TopBar;
