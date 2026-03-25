import { questions } from '../data/questions';

interface StartScreenProps {
  onStart: () => void;
}

const MARKED_INDICES = new Set([2, 7, 17, 20]);

export function StartScreen({ onStart }: StartScreenProps) {
  // Build 25-cell grid: 24 questions + FREE at index 12
  const cells = [
    ...questions.slice(0, 12),
    'FREE ★',
    ...questions.slice(12, 24),
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-full py-6 pl-16 pr-4">
      {/* Header */}
      <div className="text-center mb-3 relative">
        <span className="absolute -top-4 -left-3 text-xl text-pen-blue opacity-30 animate-[wiggle_3s_ease-in-out_infinite]">✦</span>
        <span className="absolute -top-2 -right-4 text-lg text-pen-blue opacity-25 animate-[wiggle_4s_ease-in-out_infinite_0.5s]">★</span>
        <h1 className="font-heading text-3xl text-pencil inline-block rotate-[-1deg] highlighter-yellow px-1 tracking-wide">
          Soc Ops
        </h1>
        <p className="text-base text-pen-blue mt-1 wavy-underline inline-block">
          Social Bingo
        </p>
      </div>

      {/* Hero: animated 5×5 bingo grid */}
      <div className="sketch-border bg-paper/80 p-2 max-w-xs w-full mx-auto rotate-[0.5deg] mb-4">
        {/* Column headers */}
        <div className="grid grid-cols-5 gap-[2px] mb-[2px]">
          {['B', 'I', 'N', 'G', 'O'].map((letter) => (
            <div key={letter} className="font-heading text-center text-pen-blue text-sm py-0.5">
              {letter}
            </div>
          ))}
        </div>
        {/* Grid cells */}
        <div className="grid grid-cols-5 gap-[2px] bg-pen-blue">
          {cells.map((text, index) => {
            const isFree = index === 12;
            const isMarked = MARKED_INDICES.has(index);
            return (
              <div
                key={index}
                className={`preview-cell card-deal deal-${index}${isFree ? ' preview-cell-free' : ''}${isMarked ? ' relative scribble-circle' : ''}`}
              >
                {text}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA — fades in after cards are dealt */}
      <div className="cta-reveal w-full max-w-xs px-2">
        <button
          onClick={onStart}
          className="sketch-border-blue w-full bg-pen-blue text-paper font-heading py-3 px-8 text-xl tracking-wide hover:animate-[wobble_0.4s_ease-in-out] active:bg-pen-blue-dark transition-colors"
        >
          Start Game ✎
        </button>
        <p className="text-center text-pencil-light text-xs mt-2 opacity-70">
          → find people who match the squares ←
        </p>
      </div>
    </div>
  );
}
