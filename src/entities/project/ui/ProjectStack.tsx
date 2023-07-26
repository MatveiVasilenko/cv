import { useGetProjectQuery } from '../api/projectApi';
import { useParams } from 'react-router-dom';
import { DEFAULT_LANG, DEFAULT_PROJECT_ID, TLang } from 'src/app/config';
import ContentBlock from 'src/shared/ContentBlock';
import { Card } from 'src/shared/Card';
import { STATIC_LANG_DATA } from 'src/app/lang';
import LabelBubbles from 'src/shared/LabelBubbles';
import { TProjectStack } from '../model';

const ProjectStack = () => {
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

  const projectStack: TProjectStack = project && JSON.parse(project.stack); // Bad Backend :)

  if (!projectStack) {
    return (
      <div>Loading</div>
    )
  }
  return (
    <ContentBlock
      title={STATIC_LANG_DATA.stack[lang]}
      variant="secondary"
    >
      <Card className="flex flex-col gap-3">
        <div className="flex md:flex-nowrap flex-wrap md:gap-0 gap-4">
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <div className="title uppercase">
              {projectStack?.left?.title}
            </div>
            <div className="flex flex-col gap-1">
              {projectStack?.left?.lisp?.map((item: {
                title: string;
                percent: number;
              }) => (
                <LabelBubbles
                  label={item.title}
                  range={item.percent}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <div className="title uppercase">
              {projectStack?.right?.title}
            </div>
            <div className="flex flex-col gap-1">
              {projectStack?.right?.lisp.map((item: {
                title: string;
                percent: number;
              }) => (
                <LabelBubbles
                  label={item.title}
                  range={item.percent}
                />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </ContentBlock>
  )
};

export default ProjectStack;