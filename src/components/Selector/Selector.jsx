// React
import { useEffect, useRef, useState } from "react";

// Constants
import EMOJIS from "./constants";

const DEFAULT_EMOJI_SELECTED_INDEX = 4;
const EMOJI_SIZE_PX = 112;

const Selector = ({ onSelect }) => {
  const scroll = useRef(null);
  const selectorContainer = useRef(null);
  const [selected, setSelected] = useState(DEFAULT_EMOJI_SELECTED_INDEX);
  const [smoothScrollClass, setSmoothScrollClass] = useState("");

  useEffect(() => {
    if (scroll) {
      scroll.current.scrollLeft += EMOJI_SIZE_PX * 2;
      setSmoothScrollClass("scroll-smooth");
    }
  }, []);

  useEffect(() => {
    onSelect(EMOJIS[selected]);
  }, [selected, onSelect]);

  const onScroll = () => {
    if (selectorContainer) {
      const selectorCoords = selectorContainer.current.getBoundingClientRect();
      const emojisCoords = document.getElementsByClassName("emoji");

      Array.from(emojisCoords).forEach((emojiCoords) => {
        if (selectorCoords.x === emojiCoords.getBoundingClientRect().x) {
          setSelected(emojiCoords.id);
        }
      });
    }
  };

  return (
    <div className="relative h-28 w-full">
      <div
        ref={scroll}
        className={`absolute z-10 w-full flex items-center overflow-y-hidden  overflow-x-scroll ${smoothScrollClass} snap-x snap-mandatory `}
        onScroll={onScroll}
      >
        {EMOJIS.map((emoji, index) => (
          <div
            className="emoji cursor-pointer flex flex-column items-center justify-center snap-start min-h-28 min-w-28 max-h-28 max-w-28  outline-none"
            key={index}
            id={index}
          >
            <span className="leading-[1.15] text-center text-8xl select-none">
              {emoji}
            </span>
          </div>
        ))}
      </div>
      <div
        ref={selectorContainer}
        className="absolute z-0 top-0 left-56 min-h-28 min-w-28 max-h-28 max-w-28 bg-[rgba(0,0,0,0.1)] border-[2px] border-[rgba(0,0,0,0.05)] rounded-3xl select-none"
      />
    </div>
  );
};
export default Selector;
