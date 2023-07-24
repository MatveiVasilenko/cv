import React, { FC, ReactNode } from 'react';
import ContentTitle from 'src/shared/ContentTitle';

interface IContentBlockProps {
  title: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

const ContentBlock:FC<IContentBlockProps> = ({
  title,
  children,
  variant = 'primary',
}) => {
  return (
    <div>
      <ContentTitle
        title={title}
        variant={variant}
      />
      {children}
    </div>
  )
};

export default ContentBlock;