import React, { FC } from 'react';
import { useGetProjectQuery } from '../api/projectApi';
import { useParams } from 'react-router-dom';
import { DEFAULT_LANG, TLang } from 'src/app/config';
import ContentBlock from 'src/shared/ContentBlock';
import { Card } from 'src/shared/Card';
import { STATIC_LANG_DATA } from 'src/app/lang';

interface IProjectNameProps {

};

const ProjectName:FC<IProjectNameProps> = ({}) => {
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
    id,
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