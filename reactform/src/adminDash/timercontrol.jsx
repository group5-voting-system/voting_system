import React, { useState } from 'react';
// import { useTimer } from './TimerContext';
import { useTimer } from './timecontext';

const TimerControl = () => {
  const { timeRemaining, isActive, startTimer, stopTimer } = useTimer();
  const [duration, setDuration] = useState(60); // Default 60 seconds

  const handleStart = () => {
    startTimer(duration * 60); // Convert minutes to seconds
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">تحكم المؤقت</h2>
      <div className="flex items-center space-x-4">
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="border rounded px-2 py-1 w-20"
          min="1"
        />
        <span>دقائق</span>
        <button
          onClick={handleStart}
          disabled={isActive}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          بدء
        </button>
        <button
          onClick={stopTimer}
          disabled={!isActive}
          className="bg-red-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          إيقاف
        </button>
      </div>
      {isActive && (
        <p className="mt-4">
          الوقت المتبقي: {Math.floor(timeRemaining / 60)}:{timeRemaining % 60 < 10 ? '0' : ''}
          {timeRemaining % 60}
        </p>
      )}
    </div>
  );
};

export default TimerControl;