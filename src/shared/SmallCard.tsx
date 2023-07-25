import React from 'react';
import { twMerge } from "tailwind-merge";

export const SmallCard = ({
  className,
  children,
}: React.AllHTMLAttributes<HTMLElement>) => (
  <div className={twMerge('px-6 py-4', className)}>
    {children}
  </div>
);