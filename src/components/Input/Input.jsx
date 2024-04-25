import { Send } from "./assets";

const Input = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex items-center justify-between h-20 w-full bg-white rounded-3xl px-10">
        <input
          type="text"
          className="flex w-full h-full outline-none text-2xl"
        />
        <div className="h-3/6 border-[0.5px] border-gray-300 mx-2" />
        <button type="submit">
          <img src={Send} className="h-10 w-10" />
        </button>
      </div>
    </form>
  );
};

export default Input;
