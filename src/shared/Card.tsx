import React from 'react';
import { twMerge } from 'tailwind-merge';

const SmallColumn = ({
  className,
  children,
}: React.AllHTMLAttributes<HTMLElement>) => (
  <div className={twMerge('min-w-[20%] w-[20%]', className)}>
    {children}
  </div>
);

export const Card = ({
  className,
  children,
}: React.AllHTMLAttributes<HTMLElement>) => (
  <div className={twMerge('md:px-10 md:py-8 p-4', className)}>
    {children}
  </div>
);

Card.SmallColumn = SmallColumn;