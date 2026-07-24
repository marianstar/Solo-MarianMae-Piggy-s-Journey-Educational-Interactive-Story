interface ChoiceButtonProps {
  text: string;
  onClick: () => void;
}

export default function ChoiceButton({
  text,
  onClick,
}: ChoiceButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
      w-full
      p-3
      rounded-xl
      bg-pink-500
      text-white
      hover:bg-pink-600
      transition
      "
    >
      {text}
    </button>
  );
}
