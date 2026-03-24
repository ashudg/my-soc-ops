interface BingoModalProps {
  onDismiss: () => void;
  onRetry: () => void;
}

export function BingoModal({ onDismiss, onRetry }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 max-w-xs w-full text-center shadow-xl animate-[bounce_0.5s_ease-out]">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-amber-500 mb-2">BINGO!</h2>
        <p className="text-gray-600 mb-6">You completed a line!</p>

        <div className="flex flex-col gap-3">
          <button
            onClick={onRetry}
            className="w-full bg-amber-500 text-white font-semibold py-3 px-6 rounded-lg active:bg-amber-600 transition-colors"
          >
            Play Again
          </button>
          <button
            onClick={onDismiss}
            className="w-full bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg active:bg-gray-200 transition-colors"
          >
            Keep Playing
          </button>
        </div>
      </div>
    </div>
  );
}
