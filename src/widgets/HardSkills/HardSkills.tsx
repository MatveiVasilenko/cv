import ContentBlock from 'src/shared/ContentBlock';
import { Card } from 'src/shared/Card';
import viteLogo from 'src/assets/vite.svg';
import reactLogo from 'src/assets/react.svg';
import reduxLogo from 'src/assets/redux.svg';
import LabelBubbles from 'src/shared/LabelBubbles';
import { HARDSKILLS } from './config';
import { STATIC_LANG_DATA } from 'src/app/lang';
import { DEFAULT_LANG, TLang } from 'src/app/config';
import { useParams } from 'react-router-dom';

const HardSkills = () => {
  const { lang = DEFAULT_LANG } = useParams<{
    lang: TLang;
  }>();

  return (
    <ContentBlock
      title="HARD.SKILLS"
      variant="secondary"
    >
      <Card className="flex flex-col gap-3">
        <div>
          <div className="flex flex-wrap gap-1">
            <span>{STATIC_LANG_DATA.thisIsCv[lang]}</span>
            <span className="font-bold">React</span>
            <img src={reactLogo} alt="react" width={20} />
            <span>{STATIC_LANG_DATA.and[lang]}</span>
            <span className="font-bold">Vite</span>
            <img src={viteLogo} alt="vite" width={20} />
          </div>
          <div className="flex flex-wrap gap-1">
            <span>{STATIC_LANG_DATA.stateManager[lang]}</span>
            <span className="font-bold">React-redux</span>
            <img src={reduxLogo} alt="redux" width={20} />
          </div>
          <div className="flex flex-wrap gap-1">
            <span>{STATIC_LANG_DATA.apiManager[lang]}</span>
            <span className="font-bold">RTK Query</span>
            <img src={reduxLogo} alt="redux" width={20} />
          </div>
          <div className="flex flex-wrap gap-1">
            <span>{STATIC_LANG_DATA.iUsed[lang]}</span>
            <span className="font-bold">Feature-Sliced Design</span>
            <span>{STATIC_LANG_DATA.arcMethod[lang]}</span>
          </div>
          <div className="flex gap-1">
            <div>{STATIC_LANG_DATA.canSee[lang]}</div>
            <a className="font-semibold" href="https://github.com/MatveiVasilenko/cv" target='_blank'>GitHub</a>
          </div>
        </div>
        <div className="font-medium">
          {STATIC_LANG_DATA.whatAbout[lang]}
        </div>
        <div className="flex md:flex-nowrap flex-wrap md:gap-0 gap-4">
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <div className="title uppercase">Front-End</div>
            <div className="flex flex-col gap-1">
              {HARDSKILLS.frontend.map((item) => (
                <LabelBubbles
                  key={item.title}
                  label={item.title}
                  range={item.range}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="title uppercase">Back-End</div>
              <div className="flex flex-col gap-1">
                {HARDSKILLS.backend.map((item) => (
                  <LabelBubbles
                    key={item.title}
                    label={item.title}
                    range={item.range}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="title uppercase">Hobby</div>
              <div className="flex flex-col gap-1">
                {HARDSKILLS.hobby.map((item) => (
                  <LabelBubbles
                    key={item.title}
                    label={item.title}
                    range={item.range}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </ContentBlock>
  )
};

export default HardSkills;