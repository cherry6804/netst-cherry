import React from 'react';

interface SpeedometerProps {
  speed: number;
  maxSpeed: number;
  label: string;
  color: string;
  unit: string;
  formattedSpeed: string;
}

export function Speedometer({ speed, maxSpeed, label, color, unit, formattedSpeed }: SpeedometerProps) {
  
    const rotation = Math.min((speed / maxSpeed) * 180, 180);
    const containerStyle = {
        overflow: 'hidden',  // Ensures speedometer stays within the box
        width: '100%',       // Flexible width
        height: 'auto',      // Height will adjust to fit semi-circle
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-4">{label}</h3>
      <div className="relative w-full aspect-[2/1] mb-4">
        <div className="absolute w-full h-full border-t-[16px] rounded-t-full border-gray-100"></div>
        <div 
          className="absolute w-full h-full border-t-[16px] rounded-t-full transition-all duration-500"
          style={{
            borderColor: color,
            transform: `rotate(${rotation}deg)`,
            transformOrigin: 'bottom center',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          }}
        ></div>
        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-gray-800 rounded-full transform -translate-x-1/2"></div>
      </div>
      <div className="text-4xl font-bold" style={{ color }}>
        {formattedSpeed}
        <span className="text-xl ml-1">{unit}</span>
      </div>
    </div>
  );
}