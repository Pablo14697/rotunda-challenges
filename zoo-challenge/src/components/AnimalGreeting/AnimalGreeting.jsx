// React
import { useEffect, useMemo, useRef } from "react";

// Assets
import { Triangle } from "./assets";

const AnimalGreeting = ({ animal, greeting }) => {
  const audio = useRef(null);
  const removeExtraBlankSpaces = (str) => str.trim().replace(/\s+/g, " ");

  const greetingFormattedAsAnimal = useMemo(() => {
    if (!greeting) return "Hello! This animal will say what you type below";
    const greetingToFormat = removeExtraBlankSpaces(greeting);
    return `${greetingToFormat} `.replace(/ /g, ` ${animal.sound} `);
  }, [greeting, animal.sound]);

  useEffect(() => {
    if (audio.current && greeting) {
      audio.current.play();
    }
  }, [greeting, animal.key]);

  return (
    <div className="flex flex-col md:gap-8 items-center justify-center md:justify-between w-full md:flex-row">
      <span className="text-10xl">{animal.text}</span>
      <div className="relative flex items-center justify-center px-6 w-full h-44 md:h-64 bg-white rounded-3xl">
        <div className="absolute -top-3 rotate-[-30deg] md:rotate-[0deg] md:top-auto md:-left-5 z-[-1]">
          <img src={Triangle} alt="Triangle" />
        </div>
        <span className="text-center text-3xl">
          {greetingFormattedAsAnimal}
        </span>
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
