// React
import { useState } from "react";

// Components
import { AnimalGreeting, Input, Selector } from "./components";
import EMOJIS from "./components/Selector/constants";

function App() {
  const [animal, setAnimal] = useState(EMOJIS[6]);
  const [greeting, setGreeting] = useState("");

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <div className="flex flex-col gap-12 w-140 ">
        <AnimalGreeting animal={animal} greeting={greeting} />
        <Selector onSelect={setAnimal} />
        <Input setGreeting={setGreeting} />
      </div>
    </div>
  );
}

export default App;
