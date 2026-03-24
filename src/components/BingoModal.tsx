interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-pencil/40 flex items-center justify-center p-4 z-50">
      <div className="torn-paper pt-8 pb-6 px-6 max-w-xs w-full text-center shadow-xl animate-[doodle-pop_0.4s_ease-out]">
        {/* Doodle stars around the title */}
        <div className="text-pen-blue text-2xl mb-2 tracking-[0.3em] opacity-50">✦ ★ ✦</div>
        <h2 className="font-heading text-5xl text-pen-blue mb-2 rotate-[-1deg] highlighter-yellow inline-block px-3">
          BINGO!
        </h2>
        <p className="text-pencil-light text-lg mb-6 mt-2 italic">You completed a line!</p>

        <button
          onClick={onDismiss}
          className="sketch-border-blue w-full bg-pen-blue text-paper font-heading py-3 px-6 text-xl active:bg-pen-blue-dark transition-colors hover:animate-[wobble_0.4s_ease-in-out]"
        >
          Keep Playing ✎
        </button>
      </div>
    </div>
  );
}
