interface ProgressProps {
  balance: number;
  goal: number;
}

export default function ProgressBar({
  balance,
  goal,
}: ProgressProps) {

  const percent = Math.min(
    (balance / goal) * 100,
    100
  );

  return (
    <div className="space-y-2">

      <p className="font-semibold">
        🎒 Savings Progress
      </p>

      <div className="w-full h-5 bg-gray-200 rounded-full">

        <div
          className="h-5 rounded-full bg-pink-500 transition-all"
          style={{
            width: `${percent}%`,
          }}
        />

      </div>

      <p>
        {balance} / {goal} XLM
      </p>

    </div>
  );
}