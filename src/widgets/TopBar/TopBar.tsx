import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { DEFAULT_LANG, TLang } from 'src/app/config';
import LangSwitcher from 'src/features/LangSwitcher/ui/LangSwitcher';

interface ITopBarProps {

};

const TopBar: FC<ITopBarProps> = ({ }) => {
  const params = useParams<{
    lang: TLang;
  }>();
  return (
    <div className="text-green px-8 py-12 relative">
      <div className="font-bold text-5xl uppercase">Matvii Vasylenko</div>
      <div>
        <div>Senior Frontend Developer (React) 5+</div>
        <div>Junior+ Backend Developer</div>
        <div>CTO | 5 projects</div>
      </div>
      <LangSwitcher activeLang={params.lang ?? DEFAULT_LANG} />
      <div className="absolute right-10 bottom-10 font-semibold">CV</div>
    </div>
  )
};

export default TopBar;