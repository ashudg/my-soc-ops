interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 pl-16">
      <div className="text-center max-w-sm relative">
        {/* Doodle decorations */}
        <span className="absolute -top-6 -left-4 text-2xl text-pen-blue opacity-30 animate-[wiggle_3s_ease-in-out_infinite]">✦</span>
        <span className="absolute -top-2 -right-6 text-xl text-pen-blue opacity-25 animate-[wiggle_4s_ease-in-out_infinite_0.5s]">★</span>
        <span className="absolute bottom-12 -right-8 text-lg text-pen-blue opacity-20 animate-[wiggle_3.5s_ease-in-out_infinite_1s]">✿</span>

        <h1 className="font-heading text-5xl text-pencil mb-1 rotate-[-2deg] tracking-wide">
          Soc Ops
        </h1>
        <p className="text-xl text-pen-blue mb-10 wavy-underline inline-block">
          Social Bingo
        </p>

        <div className="sticky-note relative p-5 mb-10 text-left">
          <div className="tape" />
          <h2 className="font-heading text-xl text-pencil mb-3 text-center mt-2">How to play</h2>
          <ul className="text-pencil-light text-base space-y-2 ml-1">
            <li>→ Find people who match the squares</li>
            <li>→ Tap a square when you find a match</li>
            <li>→ Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="sketch-border-blue w-full bg-pen-blue text-paper font-heading py-4 px-8 text-2xl tracking-wide active:bg-pen-blue-dark transition-colors hover:animate-[wobble_0.4s_ease-in-out]"
        >
          Start Game ✎
        </button>

        {/* Bottom doodle arrow */}
        <p className="mt-6 text-pencil-light text-sm opacity-60 rotate-[1deg]">
          ~ tap above to begin ~
        </p>
      </div>
    </div>
  );
}
