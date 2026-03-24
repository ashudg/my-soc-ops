import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center bg-paper transition-all duration-150 select-none min-h-[60px] text-xs leading-tight font-hand';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-highlight-yellow text-pencil'
      : 'bg-highlight-pink/60 text-pencil'
    : 'bg-paper text-pencil-light active:bg-paper-dark';

  const freeSpaceClasses = square.isFreeSpace
    ? 'font-heading text-sm text-pen-blue rotate-[-2deg]'
    : '';

  const markedCircle = square.isMarked && !square.isFreeSpace ? 'scribble-circle' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses} ${markedCircle}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">
        {square.isFreeSpace ? '★ FREE ★' : square.text}
      </span>
    </button>
  );
}
