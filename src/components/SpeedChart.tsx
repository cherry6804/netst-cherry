import React from 'react';

interface SpeedChartProps {
  data: Array<{ time: number; speed: number }>;
  color: string;
  title: string;
}

export function SpeedChart({ data, color, title }: SpeedChartProps) {
  const maxSpeed = Math.max(...data.map(d => d.speed), 0);
  const points = data.map((d, i) => ({
    x: (i / Math.max(1, data.length - 1)) * 100,
    y: (d.speed / Math.max(maxSpeed, 1)) * 100,
  }));

  const pathData = points.length > 0
    ? `M ${points.map(p => `${p.x},${100 - p.y}`).join(' L ')}`
    : '';

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="relative h-48">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((y) => (
            <React.Fragment key={y}>
              <line
                x1="0"
                y1={y}
                x2="100"
                y2={y}
                stroke="#f0f0f0"
                strokeWidth="0.5"
              />
              <text
                x="-5"
                y={100 - y}
                fontSize="3"
                fill="#666"
                dominantBaseline="middle"
                textAnchor="end"
              >
                {((maxSpeed * y) / 100).toFixed(0)}
              </text>
            </React.Fragment>
          ))}

          {/* Speed line */}
          <path
            d={pathData}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {points.map((point, i) => (
            <circle
              key={i}
              cx={point.x}
              cy={100 - point.y}
              r="1.5"
              fill={color}
            />
          ))}
        </svg>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm text-gray-500">
          <span>0s</span>
          <span>{data.length}s</span>
        </div>
      </div>
    </div>
  );
}