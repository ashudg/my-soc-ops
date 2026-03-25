import type { CSSProperties } from 'react';
import { questions } from '../data/questions';

interface StartScreenProps {
  onStart: () => void;
}

const sorted = [...questions].sort((a, b) => a.length - b.length);
const previewCells = [...sorted.slice(0, 4), 'FREE', ...sorted.slice(4, 8)];

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full pl-16 py-8">
      <div className="relative w-full max-w-sm mx-auto px-4">

        {/* Scattered doodle decorations */}
        <span className="absolute -top-4 right-2 text-xl text-pen-blue opacity-30 animate-[wiggle_3s_ease-in-out_infinite] pointer-events-none">✦</span>
        <span className="absolute top-36 -left-2 text-lg text-pen-blue opacity-25 animate-[wiggle_4s_ease-in-out_infinite_0.5s] pointer-events-none">★</span>
        <span className="absolute bottom-20 -right-2 text-base text-pen-blue opacity-20 animate-[wiggle_3.5s_ease-in-out_infinite_1s] pointer-events-none">✿</span>

        {/* Note 1 — Title (yellow, tape) */}
        <div
          className="sticky-note tape relative p-5 pt-8 text-center note-drop note-delay-1"
          style={{ '--note-rotation': '-3deg' } as CSSProperties}
        >
          <div className="tape" />
          <h1 className="font-heading text-5xl text-pencil relative doodle-star">Soc Ops</h1>
          <p className="text-xl text-pen-blue mt-2 wavy-underline inline-block">Social Bingo</p>
        </div>

        {/* Note 2 — Mini preview grid (pink, pushpin) */}
        <div
          className="sticky-note-pink pushpin relative p-3 pt-5 -mt-3 note-drop note-delay-2"
          style={{ '--note-rotation': '2deg' } as CSSProperties}
        >
          <div className="grid grid-cols-3 gap-1">
            {previewCells.map((cell, i) => (
              <div
                key={i}
                className={[
                  'relative sketch-border-thin bg-paper text-pencil text-[0.6rem] p-1 text-center leading-tight',
                  i === 1 || i === 5 ? 'scribble-circle' : '',
                ].join(' ')}
              >
                {cell}
              </div>
            ))}
          </div>
        </div>

        {/* Note 3 — Instructions (green, tape) */}
        <div
          className="sticky-note-green tape relative p-5 pt-8 mt-2 note-drop note-delay-3"
          style={{ '--note-rotation': '-1.5deg' } as CSSProperties}
        >
          <div className="tape" />
          <h2 className="font-heading text-lg text-pencil mb-2">How to play:</h2>
          <p className="text-pencil-light text-sm">→ Find people who match</p>
          <p className="text-pencil-light text-sm">→ Tap a square</p>
          <p className="text-pencil-light text-sm">→ Get 5 in a row!</p>
        </div>

        {/* Note 4 — CTA (yellow, tape) */}
        <div
          className="sticky-note tape relative p-5 pt-8 mt-2 text-center note-drop note-delay-4"
          style={{ '--note-rotation': '1deg' } as CSSProperties}
        >
          <div className="tape" />
          <button
            onClick={onStart}
            className="sketch-border-blue w-full bg-pen-blue text-paper font-heading py-4 px-8 text-2xl tracking-wide hover:animate-[wobble_0.4s_ease-in-out]"
          >
            Start Game ✎
          </button>
          <p className="text-pencil-light text-sm mt-2 opacity-70">✎ let's go!</p>
        </div>

      </div>
    </div>
  );
}

