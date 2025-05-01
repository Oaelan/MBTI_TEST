import useAnswerStore from "@/store/useAnswerStore";
import { useEffect } from "react";
import { useState } from "react";

export default function Result() {
  const MBTI = useAnswerStore((state) => state.MBTI);
  const [result, setResult] = useState<string>("");
  useEffect(() => {
    const result = Object.entries(MBTI)
      .map(([key, value]) => `${key}: ${value}`)
      .join(", ");
    setResult(result);
  }, [MBTI]);
  return (
    <div className="w-full h-full center">
      <h1 className="text-4xl font-bold">{result}</h1>
    </div>
  );
}
