import { useParams } from 'react-router-dom';
import { DEFAULT_LANG, TLang } from 'src/app/config';
import { EDUCATION_LANG_DATA, STATIC_LANG_DATA } from 'src/app/lang';
import { Card } from 'src/shared/Card';
import ContentBlock from 'src/shared/ContentBlock';

const Educations = () => {
  const { lang = DEFAULT_LANG } = useParams<{
    lang: TLang;
  }>();

  return (
    <ContentBlock
      title={STATIC_LANG_DATA.education[lang]}
      variant="secondary"
    >
      <Card className="flex flex-col gap-8">
        {EDUCATION_LANG_DATA.map((education, idx) => (
          <div className="flex gap-8">
            <Card.SmallColumn key={`edu${idx}`}>
              <div className="font-medium text-lg">
                {education.date}
              </div>
            </Card.SmallColumn>
            <div>
              <div className="text-lg font-bold">
                {education.title}
              </div>
              <div>
                {education.place[lang]}
              </div>
            </div>
          </div>
        ))}
      </Card>
    </ContentBlock>
  )
};

export default Educations;