import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface IContentTitleProps {
  title: string;
  variant: 'primary' | 'secondary';
};

const ContentTitle:FC<IContentTitleProps> = ({
  title,
}) => {
  return (
    <div className={twMerge(
      'uppercase'
    )}>
      {title}
    </div>
  )
};

export default ContentTitle;