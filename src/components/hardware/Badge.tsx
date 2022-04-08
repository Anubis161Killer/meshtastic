import React from 'react';

export interface BadgeProps {
  name: string;
  color: string;
  icon: React.ReactNode;
}

export const Badge = ({ name, color, icon }: BadgeProps): JSX.Element => {
  return (
    <div
      className={`flex h-min cursor-pointer gap-1 rounded-md px-1 text-white shadow-md hover:opacity-80 ${color}`}
    >
      <div className="m-auto">{icon}</div>
      <span>{name}</span>
    </div>
  );
};
