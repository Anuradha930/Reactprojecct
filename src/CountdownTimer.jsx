import React, { useEffect, useState } from "react";
import "./CountdownTimer.css"; // ✅ for styles

function CountdownTimer({ endTime }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(endTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null;
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  if (!timeLeft) {
    return <span className="timer-ended">🔥 Offer Ended</span>;
  }

  return (
    <div className="countdown-box">
      ⏱ {timeLeft.hrs}h : {timeLeft.mins}m : {timeLeft.secs}s
    </div>
  );
}

export default CountdownTimer;
