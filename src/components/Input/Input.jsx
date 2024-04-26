// Assets
import { useState } from "react";
import { Send } from "./assets";

const Input = ({ setGreeting }) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value.length > 30) return;
    setValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setGreeting(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex items-center justify-between h-16 md:h-20 w-full bg-white rounded-3xl px-4">
        <input
          type="text"
          className="flex w-full h-full outline-none text-2xl"
          value={value}
          onChange={onChange}
        />
        <div className="h-3/6 border-[0.5px] border-gray-300 mx-2" />
        <button type="submit">
          <img src={Send} className="h-10 w-10" alt="Send" />
        </button>
      </div>
    </form>
  );
};

export default Input;
