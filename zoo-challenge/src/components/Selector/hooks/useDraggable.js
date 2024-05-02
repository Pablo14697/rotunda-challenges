import { useEffect } from "react";

const useDraggable = () => {
  useEffect(() => {
    const slider = document.querySelector(".draggable-container ");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.style.cursor = "grab";

    if (!slider) return;
    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.style.cursor = "grabbing";
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.style.cursor = "grab";
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.style.cursor = "grab";
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });
  }, []);
};

export default useDraggable;
