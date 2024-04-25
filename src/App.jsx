import { Input, Selector } from "./components";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <div className=" flex flex-col gap-12 w-140 ">
        <Selector />
        <Input />
      </div>
    </div>
  );
}

export default App;
