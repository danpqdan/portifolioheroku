import React, { useState } from "react";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { useSpring, a } from "@react-spring/web";
import { Display } from "../componentes/Display";

import Carousel, { consts } from "react-elastic-carousel";

export function TransicaoImagem() {
  const [flipped, set] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const breakPoint = [
    { width: "w-ds-sm", itemToShow: 1 },
    { width: "w-ds-sm", itemToShow: 2, itemToScroll: 2 },
    { width: "w-ds-sm", itemToShow: 3 },
    { itemToShow: 4 },
    { type: BiArrowToLeft },
  ];

  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const addItem = () => {
    const nextItem = Math.max(1, items.length + 1);
    setItems([...items, nextItem]);
  };

  const removeItem = () => {
    const endRange = Math.max(0, items.length - 1);
    setItems(items.slice(0, endRange));
  };

  return (
    <nav className="overflow-hidden">
      <div className="relative overflow-hidden flex items-center justify-center w-ds-md">
        <Carousel breakPoints={breakPoint} className="w-ds-sm h-ds-sm">
          {items.map((item) => (
            <div
              onClick={() => set((state) => !state)}
              className="bg-cover cursor-pointer w-ds-sm"
              key={item}
            >
              <a.div
                style={{
                  opacity: opacity.to((o) => 1 - o),
                  transform,
                }}
                className="absolute"
              >
                <Display className="h-ds-sm w-ds-sm bg-blue-900 mx-4">
                  Teste
                </Display>
              </a.div>
              <a.div
                style={{
                  opacity,
                  transform,
                  rotateX: "180deg",
                }}
              >
                <Display className="h-ds-sm w-ds-sm bg-blue-900 mx-4"></Display>
              </a.div>
            </div>
          ))}
        </Carousel>
      </div>
    </nav>
  );
}
