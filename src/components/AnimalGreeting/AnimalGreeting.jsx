// Assets
import { Triangle } from "./assets";

const AnimalGreeting = () => {
  return (
    <div className="flex gap-[2rem] items-center justify-between w-full">
      <span className="text-10xl">🐶</span>
      <div className="relative flex items-center justify-center px-6 w-full h-64 bg-white rounded-3xl">
        <div className="absolute -left-5 z-[-1]">
          <img src={Triangle} alt="Triangle" />
        </div>
        <span className="text-3xl">
          Hello guau my guau name guau is guau Pablo.  I guau am guau Software
          guau Engineer guau.{" "}
        </span>
      </div>
    </div>
  );
};
export default AnimalGreeting;
