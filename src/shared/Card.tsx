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
  <div className={twMerge('px-10 py-8', className)}>
    {children}
  </div>
);

Card.SmallColumn = SmallColumn;