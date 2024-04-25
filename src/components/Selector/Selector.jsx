// React
import { useEffect, useRef, useState } from "react";

// Constants
import EMOJIS from "./constants";

// Hooks
import useIsMobile from "../../hooks/useIsMobile";

const DEFAULT_EMOJI_SELECTED_INDEX = 3;
const EMOJI_SIZE_PX = 112;

const Selector = ({ onSelect }) => {
  const scroll = useRef(null);
  const selectorContainer = useRef(null);
  const [selected, setSelected] = useState(DEFAULT_EMOJI_SELECTED_INDEX);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (scroll) {
      const placeToMove = isMobile ? 1 : 2;
      scroll.current.scrollLeft += EMOJI_SIZE_PX * placeToMove;
      scroll.current.style = "scroll-smooth";
    }
  }, [isMobile]);

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
        className={`absolute z-10 w-full flex items-center overflow-y-hidden overflow-x-scroll snap-x snap-mandatory`}
        onScroll={onScroll}
      >
        {EMOJIS.map((emoji, index) => (
          <div
            className="emoji cursor-grab flex flex-column items-center justify-center snap-start min-h-28 min-w-28 max-h-28 max-w-28  outline-none"
            key={emoji.key}
            id={index}
          >
            <span className=" text-center text-8xl select-none">
              {emoji.text}
            </span>
          </div>
        ))}
      </div>
      <div
        ref={selectorContainer}
        className="absolute z-0 top-0 left-28 min-h-28 min-w-28 max-h-28 max-w-28 bg-[rgba(0,0,0,0.1)] border-[2px] border-[rgba(0,0,0,0.05)] rounded-3xl select-none"
      />
    </div>
  );
};
export default Selector;
