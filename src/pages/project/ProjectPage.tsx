import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

interface IProjectPageProps {

};

const ProjectPage:FC<IProjectPageProps> = ({}) => {
  const params = useParams();
  console.log(params.lang)
  return (
    <div>ProjectPage</div>
  )
};

export default ProjectPage;