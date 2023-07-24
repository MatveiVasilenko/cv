import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Card = ({
  className,
  children,
}: React.AllHTMLAttributes<HTMLElement>) => (
  <div className={twMerge('px-8 py-6', className)}>
    {children}
  </div>
);