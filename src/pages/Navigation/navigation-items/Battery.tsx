import { FC } from "react";

interface Props {
  level: number;
  isCharging: boolean;
}

export const BatteryIcon: FC<Props> = ({ level, isCharging }) => {
  const fillWidth = level > 100 ? 100 : level < 1 ? 0 : level;

  return (
    <svg width='22px' height='17px' viewBox='0 0 25 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect x='0.5' y='3' width='21' height='9' rx='1' stroke='white' strokeWidth='1' />
      <rect x='22' y='6' width='2' height='3' rx='0.5' fill='white' />
      <rect x='1' y='4' width={`${fillWidth * 0.21}`} height='7' rx='0.5' fill='white' />
      {isCharging && (
        <svg x='4.5' y='3' width='16px' height='16px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M7 9l4-8v6h4l-4 8v-6H7z' fill='black' />
        </svg>
      )}
    </svg>
  );
};
