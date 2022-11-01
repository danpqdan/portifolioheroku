import React, { useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";
import { useSpring, a } from "@react-spring/web";
import { Display } from "./Display";

import Carousel from "react-elastic-carousel";

export interface CardRootProps {
  children: ReactNode;
  className?: string;
}

function CardRoot(props: CardRootProps) {
  return (
    <nav className="overflow-hidden flex items-center justify-center h-ds-md w-ds-md relative">
      {props.children}
    </nav>
  );
}

export interface CardIconProps {
  children: ReactNode;
  className?: string;
}

function CardIcon(props: CardIconProps) {
  return (
    <slot className="flex justify-center items-center">{props.children}</slot>
  );
}

export interface CardContentProps {
  children: ReactNode;
  className: string;
  asChild: string;
}

function CardContent(props: CardContentProps) {
  const [flipped, set] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <Display className="w-ds-sm h-ds-md justify-center items-center">
      {items.map((item) => (
        <div
          onClick={() => set((state) => !state)}
          className="cursor-pointer w-ds-md h-ds-md flex items-center justify-center"
          key={item}
        >
          <CardRoot>
            <a.div
              style={{
                opacity: opacity.to((o) => 1 - o),
                transform,
              }}
              className=""
            >
              <h1 className="w-ds-md h-ds-md flex justify-center items-center bg-blue-500">
                <Card.Icon children={props.children} />
              </h1>
            </a.div>
          </CardRoot>
          <CardRoot children={}>
            <a.div
              style={{
                opacity,
                transform,
                rotateX: "180deg",
              }}
              className=""
            >
              <h1 className="w-ds-md h-ds-md flex justify-center items-center bg-pink-900"></h1>
            </a.div>
          </CardRoot>
        </div>
      ))}
    </Display>
  );
}

export interface CardTransitionProps {
  children: ReactNode;
  className?: string;
}

function CardTransition(props: CardTransitionProps) {
  const breakPoint = [
    { width: "w-ds-sm", itemToShow: 1 },
    { width: "w-ds-sm", itemToShow: 2, itemToScroll: 2 },
    { width: "w-ds-sm", itemToShow: 3 },
    { itemToShow: 4 },
  ];

  return (
    <Carousel
      isRTL
      breakPoints={breakPoint}
      className="w-ds-md h-ds-md flex justify-center"
    >
      {props.children}
    </Carousel>
  );
}

export const Card = {
  Root: CardRoot,
  Icon: CardIcon,
  Card: CardTransition,
  Content: CardContent,
};
