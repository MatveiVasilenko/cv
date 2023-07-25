import React, { FC } from 'react';
import { useGetProjectsQuery } from 'src/entities/project/api/projectApi';
import image5 from 'src/assets/logo1.png';
import image1 from 'src/assets/logo5.png';
import image2 from 'src/assets/logo2.png';
import image3 from 'src/assets/logo3.png';
import image4 from 'src/assets/logo4.png';
import ContentBlock from 'src/shared/ContentBlock';
import { Link, useParams } from 'react-router-dom';
import { STATIC_LANG_DATA } from 'src/app/lang';
import { DEFAULT_LANG, TLang } from 'src/app/config';
import { SmallCard } from 'src/shared/SmallCard';

interface IProjectsListProps {

};

const ProjectsList: FC<IProjectsListProps> = ({ }) => {
  const { lang = DEFAULT_LANG } = useParams<{
    lang: TLang;
  }>();
  const {
    data: projects,
  } = useGetProjectsQuery({});
  const images = [image1, image2, image3, image4, image5];
  return (
    <ContentBlock
      title={STATIC_LANG_DATA.projects[lang]}
    >
      <SmallCard
        className="flex items-center flex-col gap-4"
      >
        {projects?.map((project) => (
          <Link to={`/${lang}/project/${project.id}`} key={project.id} className="w-[150px] px-4">
            <img src={images[project.id - 1]} alt="" />
          </Link>
        ))}
      </SmallCard>
    </ContentBlock>
  );
};

export default ProjectsList;