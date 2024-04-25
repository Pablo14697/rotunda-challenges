// React
import { useEffect, useMemo, useRef } from "react";

// Assets
import { Triangle } from "./assets";

const AnimalGreeting = ({ animal, greeting }) => {
  const audio = useRef(null);
  const removeExtraBlankSpaces = (str) => str.trim().replace(/\s+/g, " ");

  const greetingFormattedAsAnimal = useMemo(() => {
    if (!greeting) return "";
    const greetingToFormat = removeExtraBlankSpaces(greeting);
    return `${greetingToFormat} `.replace(/ /g, ` ${animal.sound} `);
  }, [greeting, animal.sound]);

  useEffect(() => {
    if (audio && greeting) {
      audio.current.play();
    }
  }, [greeting, animal.key]);

  return (
    <div className="flex gap-[2rem] items-center justify-between w-full">
      <span className="text-10xl">{animal.text}</span>
      <div className="relative flex items-center justify-center px-6 w-full h-64 bg-white rounded-3xl">
        <div className="absolute -left-5 z-[-1]">
          <img src={Triangle} alt="Triangle" />
        </div>
        <span className="text-3xl">{greetingFormattedAsAnimal}</span>
      </div>

      <audio
        className="absolute invisible"
        ref={audio}
        controls
        key={animal.key}
      >
        <source
          type="audio/mp3"
          src={`https://www.google.com/logos/fnbx/animal_sounds/${animal.key}.mp3`}
        />
      </audio>
    </div>
  );
};
export default AnimalGreeting;
