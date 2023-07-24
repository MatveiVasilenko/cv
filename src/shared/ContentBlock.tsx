import React, { FC, ReactNode } from 'react';
import ContentTitle from 'src/shared/ContentTitle';

interface IContentBlockProps {
  title: string;
  children: ReactNode;
};

const ContentBlock:FC<IContentBlockProps> = ({
  title,
  children,
}) => {
  return (
    <div>
      <ContentTitle
        title={title}
      />
      {children}
    </div>
  )
};

export default ContentBlock;