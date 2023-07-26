import { FC } from 'react';
import ContentBlock from 'src/shared/ContentBlock';
import { Card } from 'src/shared/Card';
import LabelBubbles from 'src/shared/LabelBubbles';
import { SOFTSKILLS_LANG_DATA } from 'src/app/lang';
import { DEFAULT_LANG, TLang } from 'src/app/config';
import { useParams } from 'react-router-dom';

interface ISoftSkillsProps {

};

const SoftSkills: FC<ISoftSkillsProps> = ({ }) => {
  const { lang = DEFAULT_LANG } = useParams<{
    lang: TLang;
  }>();

  return (
    <ContentBlock
      title="SOFT.SKILLS"
      variant="secondary"
    >
      <Card className="flex flex-col gap-3">
        <div className="flex md:flex-nowrap flex-wrap md:gap-0 gap-4">
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <div className="title uppercase">Main</div>
            <div className="flex flex-col gap-1">
              {SOFTSKILLS_LANG_DATA.main.map((item, idx) => (
                <LabelBubbles
                  key={`softMain${idx}`}
                  label={item.title[lang]}
                  range={item.range}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <div className="title uppercase">Language</div>
            <div className="flex flex-col gap-1">
              {SOFTSKILLS_LANG_DATA.language.map((item, idx) => (
                <LabelBubbles
                  key={`softLang${idx}`}
                  label={item.title[lang]}
                  range={item.range}
                />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </ContentBlock>
  )
};

export default SoftSkills;