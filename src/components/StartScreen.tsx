import { questions } from '../data/questions';

interface StartScreenProps {
  onStart: () => void;
}

const miniQuestions = [...questions].sort((a, b) => a.length - b.length).slice(0, 8);
const miniCells: (string | null)[] = [...miniQuestions.slice(0, 4), null, ...miniQuestions.slice(4)];
const MARKED_CELL_INDICES = new Set([1, 6]);

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 pl-16">
      <div className="max-w-sm w-full mx-auto text-center space-y-6">

        {/* Section 1: Hero title */}
        <div className="fade-up stagger-1 relative flex flex-col items-center gap-1">
          <span className="absolute -top-6 -left-4 text-2xl text-pen-blue opacity-30 animate-[wiggle_3s_ease-in-out_infinite]">✦</span>
          <span className="absolute -top-2 -right-6 text-xl text-pen-blue opacity-25 animate-[wiggle_4s_ease-in-out_infinite_0.5s]">★</span>
          <span className="absolute bottom-0 -right-8 text-lg text-pen-blue opacity-20 animate-[wiggle_3.5s_ease-in-out_infinite_1s]">✿</span>
          <span className="absolute top-2 -left-2 text-base text-pen-blue opacity-20 animate-[wiggle_5s_ease-in-out_infinite_0.3s]">↗</span>
          <h1 className="font-heading text-6xl text-pencil rotate-[-2deg] tracking-wide highlighter-yellow px-2">Soc Ops</h1>
          <span className="text-xl text-pen-blue wavy-underline">Social Bingo</span>
          <span className="text-sm text-pencil-light italic highlighter-pink px-2">The ultimate icebreaker</span>
        </div>

        {/* Section 2: Decorative 3×3 mini bingo grid */}
        <div className="fade-up stagger-3">
          <div className="grid grid-cols-3 gap-1 rotate-[1.5deg] opacity-60">
            {miniCells.map((cell, i) =>
              cell === null ? (
                <div key={i} className="mini-grid-square">
                  <span className="font-heading text-pen-blue text-xs">FREE</span>
                </div>
              ) : (
                <div key={i} className={`mini-grid-square${MARKED_CELL_INDICES.has(i) ? ' scribble-circle relative' : ''}`}>
                  {cell}
                </div>
              )
            )}
          </div>
          <p className="text-xs text-pen-blue opacity-40 mt-1">← your board will look like this</p>
        </div>

        {/* Section 3: How-to-play instruction pills */}
        <div className="fade-up stagger-4 flex flex-wrap gap-2 justify-center">
          <span className="sketch-border-thin px-3 py-1 highlighter-yellow text-sm">① Find a match</span>
          <span className="sketch-border-thin px-3 py-1 highlighter-pink text-sm">② Tap the square</span>
          <span className="sketch-border-thin px-3 py-1 highlighter-green text-sm">③ Get 5 in a row!</span>
        </div>

        {/* Section 4: CTA button */}
        <div className="fade-up stagger-5">
          <button
            onClick={onStart}
            className="sketch-border-blue bg-pen-blue text-paper font-heading py-4 px-8 text-2xl animate-[wobble_3s_ease-in-out_infinite]"
          >
            Start Game ✎
          </button>
          <p className="mt-3 text-pencil-light text-sm opacity-60">~ tap above to begin ~</p>
        </div>

      </div>
    </div>
  );
}

