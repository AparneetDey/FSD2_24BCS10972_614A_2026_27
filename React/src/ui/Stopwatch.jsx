import { useEffect, useRef, useState } from "react";

const formatTime = (ms) => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const centiseconds = Math.floor((ms % 1000) / 10);

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(centiseconds).padStart(2, "0")}`;
};

const Stopwatch = () => {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const startTimeRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!running) return;

    startTimeRef.current = Date.now() - elapsed;

    intervalRef.current = setInterval(() => {
      setElapsed(Date.now() - startTimeRef.current);
    }, 10);

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const handleStart = () => setRunning(true);
  const handleStop = () => setRunning(false);
  const handleReset = () => {
    setRunning(false);
    setElapsed(0);
  };

  return (
    <main>
      <h1>Stopwatch</h1>
      <p>{formatTime(elapsed)}</p>
      <div>
        {!running ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <button onClick={handleStop}>Stop</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    </main>
  );
};

export default Stopwatch;
