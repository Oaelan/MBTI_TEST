// src/providers/MotionProvider.tsx
"use client";

import { LazyMotion } from "motion/react";
//다이내믹 임포트를 통해 필요할때만 로드 -> 초기 로딩 시간 감소
const loadFeatures = () => import("@/features").then((res) => res.default);

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
    </LazyMotion>
  );
}
