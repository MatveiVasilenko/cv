import ContentBlock from 'src/shared/ContentBlock';
import { Card } from 'src/shared/Card';
import viteLogo from 'src/assets/vite.svg';
import reactLogo from 'src/assets/react.svg';
import reduxLogo from 'src/assets/redux.svg';
import LabelBubbles from 'src/shared/LabelBubbles';
import { HARDSKILLS } from './config';

const HardSkills = () => {
  return (
    <ContentBlock
      title="HARD.SKILLS"
      variant="secondary"
    >
      <Card className="flex flex-col gap-3">
        <div>
          <div className="flex flex-wrap gap-1">
            <span>This CV creating with </span>
            <span className="font-bold">React</span>
            <img src={reactLogo} alt="react" width={20} />
            <span>and</span>
            <span className="font-bold">Vite</span>
            <img src={viteLogo} alt="vite" width={20} />
          </div>
          <div className="flex flex-wrap gap-1">
            <span>State manager is a</span>
            <span className="font-bold">React-redux</span>
            <img src={reduxLogo} alt="redux" width={20} />
          </div>
          <div className="flex flex-wrap gap-1">
            <span>Api manager is a</span>
            <span className="font-bold">RTK Query</span>
            <img src={reduxLogo} alt="redux" width={20} />
          </div>
          <div className="flex flex-wrap gap-1">
            <span>I used</span>
            <span className="font-bold">Feature-Sliced Design</span>
            <span>architectural methodology</span>
          </div>
          <div className="flex gap-1">
            <div>You can see this project in my</div>
            <a className="font-semibold" href="https://github.com/MatveiVasilenko/cv" target='_blank'>GitHub</a>
          </div>
        </div>
        <div className="font-medium">What about another skills?</div>
        <div className="flex md:flex-nowrap flex-wrap md:gap-0 gap-4">
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <div className="title uppercase">Front-End</div>
            <div className="flex flex-col gap-1">
              {HARDSKILLS.frontend.map((item) => (
                <LabelBubbles
                  label={item.title}
                  range={item.range}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="title uppercase">Back-End</div>
              <div className="flex flex-col gap-1">
                {HARDSKILLS.backend.map((item) => (
                  <LabelBubbles
                    label={item.title}
                    range={item.range}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="title uppercase">Hobby</div>
              <div className="flex flex-col gap-1">
                {HARDSKILLS.hobby.map((item) => (
                  <LabelBubbles
                    label={item.title}
                    range={item.range}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </ContentBlock>
  )
};

export default HardSkills;