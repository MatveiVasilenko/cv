import { useGetProjectQuery } from '../api/projectApi';
import { useParams } from 'react-router-dom';
import { DEFAULT_LANG, DEFAULT_PROJECT_ID, TLang } from 'src/app/config';
import ContentBlock from 'src/shared/ContentBlock';
import { Card } from 'src/shared/Card';
import { STATIC_LANG_DATA } from 'src/app/lang';

const ProjectName = () => {
  const {
    id,
    lang = DEFAULT_LANG,
  } = useParams<{
    id: string;
    lang: TLang;
  }>();
  const {
    data: project
  } = useGetProjectQuery({
    id: id ?? DEFAULT_PROJECT_ID,
  });
  return (
    <ContentBlock
      title={STATIC_LANG_DATA.nameProject[lang]}
      variant="secondary"
    >
      <Card className="text-lg">
        {project?.[`title_${lang}`]}
      </Card>
    </ContentBlock>
  )
};

export default ProjectName;