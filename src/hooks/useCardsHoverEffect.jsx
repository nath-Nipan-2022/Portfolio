import { useEffect } from "react";

export const useCardsHoverEffect = (parentClassName) => {
  useEffect(() => {
    const handleCardHover = (e) => {
      const cards = document.querySelectorAll(`${parentClassName} .card`);
      for (const card of cards) {
        const { left, top } = card.getBoundingClientRect();

        card.style.setProperty("--x", e.clientX - left - 50 + "px");
        card.style.setProperty("--y", e.clientY - top - 50 + "px");
      }
    };

    document
      .querySelector(parentClassName)
      .addEventListener("mousemove", handleCardHover);

    return () => {
      document
        .querySelector(parentClassName)
        .removeEventListener("mousemove", handleCardHover);
    };
  }, [parentClassName]);
};
