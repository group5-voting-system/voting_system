import React from 'react';
import { useTimer } from './timecontext';

const CountdownTimer = () => {
  const { timeRemaining } = useTimer();

  const days = Math.floor(timeRemaining / 86400);
  const hours = Math.floor((timeRemaining % 86400) / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="absolute top-0 left-0 bg-white bg-opacity-75 p-4 rounded-br-lg">
      <h2 className="text-2xl font-bold mb-2">الوقت المتبقي للانتخابات</h2>
      <div className="flex space-x-4">
        <TimeUnit value={days} label="يوم" />
        <TimeUnit value={hours} label="ساعة" />
        <TimeUnit value={minutes} label="دقيقة" />
        <TimeUnit value={seconds} label="ثانية" />
      </div>
    </div>
  );
};

const TimeUnit = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl font-bold">{value}</div>
    <div className="text-sm">{label}</div>
  </div>
);

export default CountdownTimer;