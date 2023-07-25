import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface IContentTitleProps {
  title: string;
  variant?: 'primary' | 'secondary';
};

const ContentTitle: FC<IContentTitleProps> = ({
  title,
  variant = 'primary',
}) => {
  return (
    <div className={twMerge(
      'uppercase font-semibold',
      variant === 'primary' && 'text-white bg-white',
      variant === 'secondary' && 'text-green bg-green'
    )}>
      <div className={twMerge(
        'ml-10 flex-1 px-5 py-2.5 text-lg',
        variant === 'primary' && 'bg-green',
        variant === 'secondary' && 'bg-grey-light'
      )}>
        {title}
      </div>
    </div>
  )
};

export default ContentTitle;