import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends React.AllHTMLAttributes<HTMLButtonElement> {
  type?: 'back' | 'up';
}

export const ButtonLink = ({
  className,
  children,
  onClick,
  type = 'up',
}: Props) => (
  <button onClick={onClick} className={twMerge('flex items-center gap-1 text-lg font-medium', className)}>
    {type === 'back' && (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2803 7.96967C13.9874 7.67678 13.5126 7.67678 13.2197 7.96967L9.71967 11.4697C9.42678 11.7626 9.42678 12.2374 9.71967 12.5303L11.4697 14.2803C11.7626 14.5732 12.2374 14.5732 12.5303 14.2803C12.8232 13.9874 12.8232 13.5126 12.5303 13.2197L11.3107 12L14.2803 9.03033C14.5732 8.73744 14.5732 8.26256 14.2803 7.96967ZM12.7822 14.5322C12.4893 14.8251 12.4893 15.2999 12.7822 15.5928L13.2197 16.0303C13.5126 16.3232 13.9874 16.3232 14.2803 16.0303C14.5732 15.7374 14.5732 15.2626 14.2803 14.9697L13.8428 14.5322C13.5499 14.2393 13.0751 14.2393 12.7822 14.5322Z" fill="black" />
      </svg>
    )}
    {children}
    {type === 'up' && (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.71967 7.96967C10.0126 7.67678 10.4874 7.67678 10.7803 7.96967L14.2803 11.4697C14.5732 11.7626 14.5732 12.2374 14.2803 12.5303L12.5303 14.2803C12.2374 14.5732 11.7626 14.5732 11.4697 14.2803C11.1768 13.9874 11.1768 13.5126 11.4697 13.2197L12.6893 12L9.71967 9.03033C9.42678 8.73744 9.42678 8.26256 9.71967 7.96967ZM11.2178 14.5322C11.5107 14.8251 11.5107 15.2999 11.2178 15.5928L10.7803 16.0303C10.4874 16.3232 10.0126 16.3232 9.71967 16.0303C9.42678 15.7374 9.42678 15.2626 9.71967 14.9697L10.1572 14.5322C10.4501 14.2393 10.9249 14.2393 11.2178 14.5322Z" fill="#2a977d" />
      </svg>
    )}
  </button>
);
