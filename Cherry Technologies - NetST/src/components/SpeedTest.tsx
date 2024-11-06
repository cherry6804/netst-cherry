import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import { Speedometer } from './Speedometer';

export function SpeedTest() {
  const [currentDownload, setCurrentDownload] = useState(0);
  const [currentUpload, setCurrentUpload] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [unit, setUnit] = useState<'Mbps' | 'Gbps'>('Mbps');

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        const newDownloadSpeed = Math.random() * 950 + 50;
        const newUploadSpeed = Math.random() * 450 + 50;
        
        setCurrentDownload(newDownloadSpeed);
        setCurrentUpload(newUploadSpeed);
        
        // Switch to Gbps if speed exceeds 1000 Mbps
        setUnit(newDownloadSpeed > 1000 ? 'Gbps' : 'Mbps');

        if (Math.random() > 0.8) {
          setIsRunning(false);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const handleStart = () => {
    setCurrentDownload(0);
    setCurrentUpload(0);
    setUnit('Mbps');
    setIsRunning(true);
  };

  const formatSpeed = (speed: number) => {
    if (unit === 'Gbps') {
      return (speed / 1000).toFixed(2);
    }
    return speed.toFixed(1);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-4">
          <Activity className="w-8 h-8 text-brand-orange" />
          <h1 className="text-3xl font-bold text-brand-orange">Speed Test</h1>
        </div>
        <button
          onClick={handleStart}
          disabled={isRunning}
          className={`px-8 py-3 rounded-full font-semibold text-white transition-all ${
            isRunning
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-brand-orange hover:bg-brand-orange/90 active:bg-brand-orange/80'
          }`}
        >
          {isRunning ? 'Testing...' : 'Start Test'}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Speedometer
            speed={currentDownload}
            maxSpeed={unit === 'Gbps' ? 1 : 1000}
            label="Download Speed"
            color="#ff1e00"
            unit={unit}
            formattedSpeed={formatSpeed(currentDownload)}
          />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Speedometer
            speed={currentUpload}
            maxSpeed={unit === 'Gbps' ? 0.5 : 500}
            label="Upload Speed"
            color="#59ce8f"
            unit={unit}
            formattedSpeed={formatSpeed(currentUpload)}
          />
        </div>
      </div>
    </div>
  );
}