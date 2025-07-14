"use client";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
  ElementType,
  MouseEvent,
} from "react";

import { cn } from "@/utils/cn"; // Make sure this utility exists

// Define context type
type MouseEnterContextType =
  | [boolean, Dispatch<SetStateAction<boolean>>]
  | undefined;

// Create context
const MouseEnterContext = createContext<MouseEnterContextType>(undefined);

// CardContainer Component
export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => setIsMouseEntered(true);

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    if (containerRef.current) {
      containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    }
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "py-20 flex items-center justify-center",
          containerClassName
        )}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

// CardBody Component
export const CardBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

// CardItem Component
export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: unknown;
}) => {
  const ref = useRef<HTMLElement>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    if (!ref.current) return;

    const tx = typeof translateX === "number" ? `${translateX}px` : translateX;
    const ty = typeof translateY === "number" ? `${translateY}px` : translateY;
    const tz = typeof translateZ === "number" ? `${translateZ}px` : translateZ;
    const rx = typeof rotateX === "number" ? `${rotateX}deg` : rotateX;
    const ry = typeof rotateY === "number" ? `${rotateY}deg` : rotateY;
    const rz = typeof rotateZ === "number" ? `${rotateZ}deg` : rotateZ;

    ref.current.style.transform = isMouseEntered
      ? `translateX(${tx}) translateY(${ty}) translateZ(${tz}) rotateX(${rx}) rotateY(${ry}) rotateZ(${rz})`
      : `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
  }, [
    isMouseEntered,
    translateX,
    translateY,
    translateZ,
    rotateX,
    rotateY,
    rotateZ,
  ]);

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// useMouseEnter Hook
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (!context) {
    throw new Error("useMouseEnter must be used within CardContainer");
  }
  return context;
};
