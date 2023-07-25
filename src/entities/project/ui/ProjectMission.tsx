import React, { FC } from 'react';
import { useGetProjectQuery } from '../api/projectApi';
import { useParams } from 'react-router-dom';
import { DEFAULT_LANG, TLang } from 'src/app/config';
import ContentBlock from 'src/shared/ContentBlock';
import { Card } from 'src/shared/Card';
import { STATIC_LANG_DATA } from 'src/app/lang';

interface IProjectMissionProps {

};

const ProjectMission:FC<IProjectMissionProps> = ({}) => {
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
      title={STATIC_LANG_DATA.missionProject[lang]}
      variant="secondary"
    >
      <Card className="text-lg">
        {project?.[`mission_${lang}`]}
      </Card>
    </ContentBlock>
  )
};

export default ProjectMission;