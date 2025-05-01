import { useEffect } from "react";
import useAnswerStore from "@/store/useAnswerStore";

export default function Result() {
  const result = useAnswerStore((state) => state.getResult());
  useEffect(() => {
    console.log(result);
  }, [result]);
  return (
    <div className="w-full h-full center flex flex-col gap-4">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
        당신은 {result} 입니다!
      </h1>
    </div>
  );
}
