import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full pl-14">
      {/* Header — notebook margin style */}
      <header className="flex items-center justify-between p-3 border-b-2 border-dashed border-pencil/20">
        <button
          onClick={onReset}
          className="text-pen-blue text-base px-3 py-1.5 sketch-border-thin active:bg-highlight-yellow/30 transition-colors"
        >
          ← back
        </button>
        <h1 className="font-heading text-2xl text-pencil tracking-wide">Soc Ops</h1>
        <div className="w-16">
          <span className="text-pen-blue opacity-30 text-lg">✦</span>
        </div>
      </header>

      {/* Instructions — pencil annotation */}
      <p className="text-center text-pencil-light text-sm py-2 px-4 rotate-[0.5deg] italic">
        ✎ tap a square when you find someone who matches
      </p>

      {/* Bingo indicator — highlighter band */}
      {hasBingo && (
        <div className="highlighter-yellow text-pencil text-center py-2 font-heading text-xl tracking-wide">
          ✧ BINGO! You got a line! ✧
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
