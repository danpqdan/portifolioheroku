import React, {
  Children,
  HTMLAttributes,
  JSXElementConstructor,
  ReactComponentElement,
  ReactElement,
  ReactPortal,
  useState,
} from "react";
import { ReactNode } from "react";
import { useSpring, a } from "@react-spring/web";
import { FaBeer } from "react-icons/fa";
import clsx from "clsx";

export interface CardRootProps {
  children: ReactNode;
  className?: string;
}

function CardRoot(props: CardRootProps) {
  return <div>{props.children}</div>;
}

export interface CardIconProps {
  children?: ReactNode;
  className?: string;
}

function CardIcon(props: CardIconProps) {
  return <div className="absolute h-ds-md w-ds-md bg-blue-500 rounded">{props.children}</div>;
}

export interface CardTextProps {
  className?: string;
  children?: ReactNode;
}

function CardText(props: CardTextProps) {
  return <div className="h-ds-md w-ds-md bg-pink-900 rounded  text-lx-md">{props.children}</div>;
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  text?: CardTextProps;
}

function CardContent(props: CardTextProps) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div onClick={() => set((state) => !state)} className="cursor-pointer">
      <a.div
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
        className="absolute h-ds-md w-ds-md bg-blue-500 text-hd-sm rounded"
      >
        <Card.Icon {...props} />
      </a.div>
      <a.div
        style={{
          opacity,
          transform,
          rotateX: "180deg",
        }}
        className=""
      >
        <Card.Text {...props} />
      </a.div>
    </div>
  );
}

export interface CardTransitionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  breackPoints?: EventListenerObject;
}

function CardTransition(props: CardTransitionProps) {
  const breakPoint = [
    { width: "w-ds-sm", itemPosition: 1 },
    { width: "w-ds-sm", itemPosition: 2 },
    { width: "w-ds-sm", itemPosition: 3 },
    { itemPosition: 4 },
  ];

  return (
    <nav
      breakPoints={breakPoint}
      className="w-ds-md h-ds-md flex justify-center"
    >
      {props.children}
    </nav>
  );
}

export const Card = {
  Root: CardRoot,
  Icon: CardIcon,
  Card: CardTransition,
  Content: CardContent,
  Text: CardText,
};
