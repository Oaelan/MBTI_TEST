import * as m from "motion/react-m";
import clsx from "clsx";
interface AnswerButtonProps {
  text: string;
  onClick: (score: { [key: string]: number }) => void;
}
interface Variant {
  [key: string]: string;
}
const VARIANT: Variant = {
  "🙆‍♂️": "bg-pink",
  "🙅‍♀️": "bg-blue",
};
//기본 스타일
const BASE_CLASS =
  "hover:bg-purple text-[15px] md:text-[20px] lg:text-[40px] rounded-lg p-4 center flex flex-col";

export default function AnswerButton({ text, onClick }: AnswerButtonProps) {
  //맞다 아니오에 맞게 스타일링
  const answerButtonClass = clsx(BASE_CLASS, VARIANT[text]);
  return (
    <m.button
      key={text}
      className={answerButtonClass}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
      }}
    >
      {text}
      {text === "🙆‍♂️" ? (
        <span className="text-white">맞다</span>
      ) : (
        <span className="text-white">아니다</span>
      )}
    </m.button>
  );
}
