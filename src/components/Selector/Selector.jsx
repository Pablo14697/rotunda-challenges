// React
import { useEffect, useRef, useState } from "react";

// Constants
import EMOJIS from "./constants";

const DEFAULT_EMOJI_SELECTED_INDEX = 4;
const EMOJI_SIZE_PX = 112;

const Selector = () => {
  const scroll = useRef(null);
  const [selected, setSelected] = useState(DEFAULT_EMOJI_SELECTED_INDEX);
  const [smoothScrollClass, setSmoothScrollClass] = useState("");

  useEffect(() => {
    if (scroll) {
      scroll.current.scrollLeft += EMOJI_SIZE_PX;
      setSmoothScrollClass("scroll-smooth");
    }
  }, []);

  const onSelect = (index) => {
    if (!EMOJIS[index]) return;
    const multiplying = index > selected ? 1 : -1;

    setSelected(index);
    scroll.current.scrollLeft +=
      multiplying * Math.abs((selected - index) * EMOJI_SIZE_PX);
  };

  return (
    <div className="relative h-28 w-full">
      <div
        id="scroll"
        ref={scroll}
        className={`absolute w-full flex items-center overflow-y-hidden  overflow-x-scroll ${smoothScrollClass} snap-x snap-mandatory`}
      >
        {EMOJIS.map((emoji, index) => (
          <button
            type="button"
            onClick={() => onSelect(index)}
            className="flex flex-column items-center justify-center snap-start min-h-28 min-w-28 max-h-28 max-w-28  outline-none"
            key={index}
            disabled={!emoji}
          >
            <span className="leading-[1.15] text-center text-8xl select-none">
              {emoji}
            </span>
          </button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-56 min-h-28 min-w-28 max-h-28 max-w-28 bg-[rgba(0,0,0,0.1)] border-[2px] border-[rgba(0,0,0,0.05)] rounded-3xl select-none"
      />
    </div>
  );
};
export default Selector;
