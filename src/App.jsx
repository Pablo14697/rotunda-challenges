// React
import { useEffect, useMemo, useState } from "react";

// Components
import { AnimalGreeting, Input, Selector } from "./components";

// Hooks
import useIsMobile from "./hooks/useIsMobile";

// Constants
import EMOJIS from "./components/Selector/constants";

function App() {
  const [animal, setAnimal] = useState(EMOJIS[0]);
  const [greeting, setGreeting] = useState("");

  const isMobile = useIsMobile();

  const emojis = useMemo(() => {
    if (isMobile) {
      return EMOJIS.slice(1, EMOJIS.length - 1);
    }
    return EMOJIS;
  }, [isMobile]);

  useEffect(() => {
    setAnimal(emojis[isMobile ? 3 : 4]);
  }, [isMobile, emojis]);

  return (
    <div className="flex flex-col h-screen w-screen items-center overflow-hidden">
      <div className="flex flex-col justify-around h-full gap-12 w-84 md:w-140">
        <AnimalGreeting animal={animal} greeting={greeting} />
        <div className="flex flex-col gap-4 h-dvh w-full">
          <Selector list={emojis} onSelect={setAnimal} />
          <Input setGreeting={setGreeting} />
        </div>
      </div>
    </div>
  );
}

export default App;
