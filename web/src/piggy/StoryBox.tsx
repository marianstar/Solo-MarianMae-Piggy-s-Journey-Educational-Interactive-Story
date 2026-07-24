import { StoryEvent } from "@/types/game";
import ChoiceButton from "./ChoiceButton";

interface StoryBoxProps {
  event: StoryEvent;
  choose: (choiceIndex: number) => void;
}

export default function StoryBox({
  event,
  choose,
}: StoryBoxProps) {
  return (
    <div className="border rounded-xl p-6 shadow-md space-y-5">

      <p className="text-gray-500">
        Day {event.day}
      </p>

      <h2 className="text-3xl font-bold">
        {event.title}
      </h2>

      <p className="whitespace-pre-line">
        {event.description}
      </p>

      <div className="space-y-3">

        {event.choices.map((choice, index) => (

          <ChoiceButton
            key={index}
            text={choice.text}
            onClick={() => choose(index)}
          />

        ))}

      </div>

    </div>
  );
}