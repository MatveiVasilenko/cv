import React, { FC } from 'react';
import { useGetProjectQuery } from '../api/projectApi';
import { Link, useParams } from 'react-router-dom';
import { DEFAULT_LANG, TLang } from 'src/app/config';
import ContentBlock from 'src/shared/ContentBlock';
import { Card } from 'src/shared/Card';
import { STATIC_LANG_DATA } from 'src/app/lang';
import Loader from 'src/shared/Loader';

interface IProjectLinkProps {

};

const ProjectLink:FC<IProjectLinkProps> = ({}) => {
  const {
    id,
    lang = DEFAULT_LANG,
  } = useParams<{
    id: string;
    lang: TLang;
  }>();
  const {
    data: project,
    isLoading
  } = useGetProjectQuery({
    id,
  });

  const links = project && JSON.parse(project?.link); // Bad Backend :)
  if (!links?.length || isLoading) {
    return <Loader />
  }
  const [firstLink] = links;
  return (
    <ContentBlock
      title={STATIC_LANG_DATA.link[lang]}
      variant="secondary"
    >
      <Card className="text-lg">
        <Link to={firstLink} target="_blank">
          {firstLink}
        </Link>
      </Card>
    </ContentBlock>
  )
};

export default ProjectLink;