import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TLang } from 'src/app/config';
import ProjectDescription from 'src/entities/project/ui/ProjectDescription';
import ProjectLink from 'src/entities/project/ui/ProjectLink';
import ProjectMission from 'src/entities/project/ui/ProjectMission';
import ProjectName from 'src/entities/project/ui/ProjectName';
import ProjectStack from 'src/entities/project/ui/ProjectStack';
import ProjectStructure from 'src/entities/project/ui/ProjectStructure';

interface IProjectPageProps {

};

const ProjectPage:FC<IProjectPageProps> = ({}) => {
  const {
    id,
    lang,
  } = useParams<{
    id: string;
    lang: TLang;
  }>();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [lang, id]);

  return (
    <div>
      <ProjectName />
      <ProjectMission />
      <ProjectDescription />
      <ProjectStructure />
      <ProjectStack />
      <ProjectLink />
    </div>
  )
};

export default ProjectPage;