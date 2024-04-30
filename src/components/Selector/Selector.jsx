// React
import { useEffect, useRef, useState } from "react";

// Hooks
import useIsMobile from "../../hooks/useIsMobile";
import useDraggable from "./hooks/useDraggable";

// Styles
import "./mask.css";

const EMOJI_SIZE_PX = 112;

const Selector = ({ list, onSelect }) => {
  const scroll = useRef(null);
  const selectorContainer = useRef(null);
  const [selected, setSelected] = useState(0);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (scroll) {
      const placeToMove = isMobile ? 1 : 2;
      scroll.current.scrollLeft += EMOJI_SIZE_PX * placeToMove;
      scroll.current.style = "scroll-smooth";
    }
    setSelected(isMobile ? 3 : 4);
  }, [isMobile]);

  useEffect(() => {
    onSelect(list[selected]);
  }, [selected, onSelect, list]);

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

  useDraggable();

  return (
    <div className="scroll relative h-28 w-full">
      <div
        ref={scroll}
        className="draggable-container absolute z-10 w-full flex items-center overflow-y-hidden overflow-x-scroll snap-x snap-mandatory"
        onScroll={onScroll}
      >
        {list.map((emoji, index) => (
          <div
            className="emoji flex flex-column items-center justify-center snap-start min-h-28 min-w-28 max-h-28 max-w-28  outline-none"
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
        className="absolute z-0 top-0 left-28 md:left-56 min-h-28 min-w-28 max-h-28 max-w-28 bg-[rgba(0,0,0,0.1)] border-[2px] border-[rgba(0,0,0,0.1)] rounded-3xl select-none"
      />
    </div>
  );
};
export default Selector;
