"use client";
import { MBTIType, Option } from "@/types/mbtiType";
import AnswerButton from "../button/AnswerButton";
import * as m from "motion/react-m";
import { useState } from "react";
interface QuestionListProps {
  id: number;
  text: string;
  options: Option[];
  onClick: (type: MBTIType) => void;
}
export default function QuestionList({
  id,
  text,
  options,
  onClick,
}: QuestionListProps) {
  // 애니메이션 완료 상태 관리
  const [animationComplete, setAnimationComplete] = useState(false);
  return (
    <div
      className="w-full h-full grid grid-rows-2
    gap-2 items-center justify-items-center"
    >
      <m.div
        className="rounded-lg w-full h-[60%] center bg-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <m.h1
          // 애니메이션 시작 시 상태 초기화
          onAnimationStart={() => setAnimationComplete(false)}
          // 애니메이션 완료 시 상태 변경
          onAnimationComplete={() => setAnimationComplete(true)}
          key={id}
          className="p-4 text-[15px] md:text-[20px]
      lg:text-[28px] font-bold text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Q. {text}
        </m.h1>
      </m.div>

      <m.div
        className="w-full h-full grid grid-cols-2 gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {options.map((option) => (
          <AnswerButton
            key={option.text}
            text={option.text}
            onClick={() => onClick(option.type)}
            disabled={!animationComplete}
          />
        ))}
      </m.div>
    </div>
  );
}
