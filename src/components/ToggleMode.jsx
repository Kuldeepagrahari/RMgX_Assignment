import { useEffect, useState } from 'react';
import '../style/togglemode.css';

export default function ToggleMode() {
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="toggle-mode">
      <label className="switch">
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => setIsDark((prev) => !prev)}
        />
        <span className="slider" />
      </label>
    </div>
  );
}
