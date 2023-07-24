import React, { FC } from 'react';
import { useGetProjectsQuery } from 'src/entities/project/api/projectApi';
import image from 'src/assets/logo2.png';
import ContentBlock from 'src/shared/ContentBlock';
import { useParams } from 'react-router-dom';
import { staticLangData } from 'src/app/lang';
import { DEFAULT_LANG, TLang } from 'src/app/config';

interface IProjectsListProps {

};

const ProjectsList:FC<IProjectsListProps> = ({}) => {
  const params = useParams<{
    lang: TLang;
  }>();
  const {
    data: projects,
  } = useGetProjectsQuery({});
  return (
    <ContentBlock
      title={staticLangData.projects[params.lang ?? DEFAULT_LANG]}
    >
      {projects?.map((project) => (
        <div key={project.id} className="w-[200px]">
          <img src={image} alt="" />
        </div>
      ))}
    </ContentBlock>
  );
};

export default ProjectsList;