import { useParams } from 'react-router-dom';
import { DEFAULT_LANG, TLang } from 'src/app/config';
import { STATIC_LANG_DATA } from 'src/app/lang';
import { Card } from 'src/shared/Card';
import ContentBlock from 'src/shared/ContentBlock';

const Mission = () => {
  const { lang = DEFAULT_LANG } = useParams<{
    lang: TLang;
  }>();

  return (
    <ContentBlock
      title={STATIC_LANG_DATA.mission[lang]}
      variant="secondary"
    >
      <Card>
        {STATIC_LANG_DATA.myMission[lang]}
      </Card>
    </ContentBlock>
  )
};

export default Mission;