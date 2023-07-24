import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TLang } from 'src/app/config';
import { twMerge } from 'tailwind-merge';

interface ILangSwitcherProps {
  activeLang: TLang;
};

const LANGS: TLang[] = [
  'en',
  'ua'
];

const LangSwitcher: FC<ILangSwitcherProps> = ({
  activeLang,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname)
  const changeLang = (newLang: TLang) => {
    const PATH_WITHOUT_LANG = pathname.slice(3);

    navigate(`/${newLang}${PATH_WITHOUT_LANG ? '/' + PATH_WITHOUT_LANG : ''}`);
  }
  return (
    <div className="absolute right-10 top-10">
      {LANGS.map((lang) => (
        <div
          key={lang}
          className={twMerge(
            "uppercase leading-5 cursor-pointer",
            activeLang === lang && 'font-semibold'
          )}
          onClick={() => changeLang(lang)}
        >
          {lang}
        </div>
      ))}
    </div>
  );
};

export default LangSwitcher;