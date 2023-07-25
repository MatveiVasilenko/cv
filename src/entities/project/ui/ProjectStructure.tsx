import React, { FC } from 'react';
import { useGetProjectQuery } from '../api/projectApi';
import { useParams } from 'react-router-dom';
import { DEFAULT_LANG, TLang } from 'src/app/config';
import ContentBlock from 'src/shared/ContentBlock';
import { Card } from 'src/shared/Card';
import { STATIC_LANG_DATA } from 'src/app/lang';

interface IProjectStructureProps {

};

const ProjectStructure: FC<IProjectStructureProps> = ({ }) => {
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

  const projectStructures = project && JSON.parse(project?.[`structure_${lang}`]); // Bad Backend :)
  return (
    <ContentBlock
      title={STATIC_LANG_DATA.structure[lang]}
      variant="secondary"
    >
      <Card className="text-lg">
        <ul className="ml-6">
          {projectStructures?.map((struct: string) => (
            <li key={struct} className="list-disc">
              {struct}
            </li>
          ))}
        </ul>
      </Card>
    </ContentBlock>
  )
};

export default ProjectStructure;