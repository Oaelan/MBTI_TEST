// src/components/Container.tsx
"use client";

import * as m from "motion/react-m";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <m.div
      className={`w-[90%] h-[60%] md:w-[70%] md:h-[80%]
        lg:w-[50%] lg:h-[70%]
        p-8 flex-center flex-col gap-10 ${className}`}
    >
      {children}
    </m.div>
  );
}
