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
            className="flex w-full gap-8"
          >
            <Card.SmallColumn>
              <div className="text-lg font-medium">{experience.date}</div>
              <div>{experience.company[lang]}</div>
            </Card.SmallColumn>
            <div className="flex flex-col gap-2">
              <div className="text-lg font-bold">{experience.jobTitle[lang]}</div>
              <div>{experience.description[lang]}</div>
              <div>
                <div>Main responsibilities:</div>
                <ul>
                  {experience.responsibilities[lang].map((resp) => (
                    <li className="list-disc ml-8">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div>Achievement:</div>
                <ul>
                  {experience.achievement[lang].map((resp) => (
                    <li className="list-disc ml-8">
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