import { AnimalGreeting, Input, Selector } from "./components";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <div className=" flex flex-col gap-12 w-140 ">
        <AnimalGreeting />
        <Selector />
        <Input />
      </div>
    </div>
  );
}

export default App;
