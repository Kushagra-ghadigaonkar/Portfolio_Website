import { useState, useEffect } from 'react';

export default function TerminalTyping({ lines = [], speed = 40, loop = true }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [phase, setPhase] = useState('typing'); // typing | pause | done

  useEffect(() => {
    if (currentLine >= lines.length) {
      if (loop) {
        const timer = setTimeout(() => {
          setDisplayedLines([]);
          setCurrentLine(0);
          setCurrentChar(0);
          setPhase('typing');
        }, 3000);
        return () => clearTimeout(timer);
      }
      setPhase('done');
      return;
    }

    const line = lines[currentLine];

    if (phase === 'typing') {
      if (currentChar < line.text.length) {
        const timer = setTimeout(() => {
          setDisplayedLines(prev => {
            const updated = [...prev];
            updated[currentLine] = line.text.slice(0, currentChar + 1);
            return updated;
          });
          setCurrentChar(c => c + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        setPhase('pause');
      }
    }

    if (phase === 'pause') {
      const timer = setTimeout(() => {
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
        setPhase('typing');
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, phase, lines, speed, loop]);

  return (
    <div className="font-mono text-sm sm:text-base space-y-1">
      {displayedLines.map((text, i) => (
        <div key={i} className="flex items-start gap-2">
          <span className="text-terminal-green shrink-0">
            {lines[i]?.prompt || '$'}
          </span>
          <span className="text-terminal-text">{text}</span>
          {i === currentLine && currentChar < (lines[i]?.text.length || 0) && (
            <span className="animate-blink text-terminal-green">|</span>
          )}
        </div>
      ))}
      {currentLine >= lines.length && (
        <div className="flex items-center gap-2 mt-1">
          <span className="text-terminal-green">$</span>
          <span className="animate-blink text-terminal-green">|</span>
        </div>
      )}
    </div>
  );
}
