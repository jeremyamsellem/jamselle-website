import React, { useEffect } from 'react';

export default function CountUp({ end, duration = 2000, decimals = 0, isActive = true }) {
  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    if (!isActive) return;

    const startTime = Date.now();
    const startValue = 0;

    const updateValue = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      const current = startValue + (end - startValue) * progress;
      setDisplayValue(parseFloat(current.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };

    requestAnimationFrame(updateValue);
  }, [end, duration, decimals, isActive]);

  return <span>{displayValue}</span>;
}
