// React
import { useMemo } from "react";

// Assets
import { Triangle } from "./assets";

const AnimalGreeting = ({ animal, animalSound = "miau", greeting }) => {
  const removeExtraBlankSpaces = (str) => str.trim().replace(/\s+/g, " ");
  const greetingFormattedAsAnimal = useMemo(() => {
    if (!greeting) return "";
    const greetingToFormat = removeExtraBlankSpaces(greeting);
    return `${greetingToFormat} `.replace(/ /g, ` ${animalSound} `);
  }, [greeting, animalSound]);
  return (
    <div className="flex gap-[2rem] items-center justify-between w-full">
      <span className="text-10xl">{animal}</span>
      <div className="relative flex items-center justify-center px-6 w-full h-64 bg-white rounded-3xl">
        <div className="absolute -left-5 z-[-1]">
          <img src={Triangle} alt="Triangle" />
        </div>
        <span className="text-3xl">{greetingFormattedAsAnimal}</span>
      </div>
    </div>
  );
};
export default AnimalGreeting;
