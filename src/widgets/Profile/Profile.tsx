import { useParams } from 'react-router-dom';
import { DEFAULT_LANG, TLang } from 'src/app/config';
import { STATIC_LANG_DATA } from 'src/app/lang';
import { Card } from 'src/shared/Card';
import ContentBlock from 'src/shared/ContentBlock';

const Profile = () => {
  const { lang } = useParams<{
    lang: TLang;
  }>();
  return (
    <ContentBlock
      title={STATIC_LANG_DATA.aboutMe[lang ?? DEFAULT_LANG]}
      variant="secondary"
    >
      <Card className="flex flex-col gap-2">
        <div className="flex flex-col gap-2" dangerouslySetInnerHTML={{
          __html: STATIC_LANG_DATA.aboutMeText[lang ?? DEFAULT_LANG]
        }} />
      </Card>
    </ContentBlock>
  )
};

export default Profile;
