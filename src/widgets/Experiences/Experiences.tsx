import { useParams } from 'react-router-dom';
import { DEFAULT_LANG, TLang } from 'src/app/config';
import { EXPERIENCE_LANG_DATA, STATIC_LANG_DATA } from 'src/app/lang';
import { Card } from 'src/shared/Card';
import ContentBlock from 'src/shared/ContentBlock';

const Experiences = () => {
  const { lang = DEFAULT_LANG } = useParams<{
    lang: TLang;
  }>();

  return (
    <ContentBlock
      title={STATIC_LANG_DATA.experience[lang]}
      variant="secondary"
    >
      <Card className="flex flex-col gap-8">
        {EXPERIENCE_LANG_DATA.map((experience, idx) => (
          <div
            key={`exp${idx}`}
            className="flex md:flex-nowrap flex-wrap w-full md:gap-8 gap-2"
          >
            <Card.SmallColumn
              className="md:w-[20%] w-full"
            >
              <div className="text-lg font-medium">{experience.date}</div>
              <div>{experience.company[lang]}</div>
            </Card.SmallColumn>
            <div className="flex flex-col gap-2">
              <div className="text-lg font-bold">{experience.jobTitle[lang]}</div>
              <div>{experience.description[lang]}</div>
              <div>
                <div>{STATIC_LANG_DATA.mainResp[lang]}:</div>
                <ul>
                  {experience.responsibilities[lang].map((resp) => (
                    <li key={resp} className="list-disc ml-8">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div>{STATIC_LANG_DATA.achievement[lang]}:</div>
                <ul>
                  {experience.achievement[lang].map((resp) => (
                    <li className="list-disc ml-8" key={resp}>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Card>
    </ContentBlock>
  )
};
//
export default Experiences;