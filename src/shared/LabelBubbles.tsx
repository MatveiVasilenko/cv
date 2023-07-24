import React, { FC } from 'react';

interface ILabelBubblesProps {
  label: string;
  range: number;
};

const LabelBubbles: FC<ILabelBubblesProps> = ({
  label,
  range,
}) => {
  const bubbles = [];
  for (let i = 0; i < range; i++) {
    bubbles[i] = i;
  }
  return (
    <div className="flex items-center gap-2">
      <div className="w-1/2">{label}</div>
      <div className="flex items-center gap-1">
        {bubbles.map((bubble) => (
          <div
            key={bubble}
            className="bg-green w-[20px] h-[20px] rounded-[50%]"
          />
        ))}
      </div>
    </div>
  )
};

export default LabelBubbles;