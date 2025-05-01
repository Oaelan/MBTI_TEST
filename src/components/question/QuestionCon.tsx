"use client";
import { questions } from "@/data/questions.json";
import QuestionList from "./QuestionList";
import { useState } from "react";
import useAnswerStore from "@/store/useAnswerStore";
import Result from "./Reuslt";

// MBTI 키 타입 정의
type MBTIKey = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
// MBTI 점수 타입
type MBTIScores = {
  [key in MBTIKey]?: number;
};
export interface Option {
  text: string;
  score: MBTIScores;
}
interface Question {
  id: number;
  text: string;
  options: Option[];
}
//질문 리스트

export default function QuestionCon() {
  const questionList: Question[] = questions;
  //현재 질문의 Id
  const [currentId, setCurrentId] = useState<number>(0);
  //선택한 답변
  const addScore = useAnswerStore((state) => state.addScore);
  // 현재 표시할 질문
  const currentQuestion = questionList[currentId];
  // 결과 컴포넌트 보여주기 위한 상태값
  const [isLast, setIsLast] = useState<boolean>(false);
  //질문 선택 시 다름 질문으로 이동
  const handleSelectOption = (score: MBTIScores) => {
    //선택한 질문 점수 추가
    addScore(score);
    //페이지 넘김
    if (currentId >= questionList.length - 1) {
      //마지막 질문일 경우 결과 페이지로 이동
      setIsLast(true);
    } else {
      setCurrentId(currentId + 1);
    }
  };
  return (
    <div className="w-full h-full center">
      {isLast ? (
        <Result />
      ) : (
        <QuestionList
          id={currentQuestion.id}
          text={currentQuestion.text}
          options={currentQuestion.options}
          onClick={handleSelectOption}
        />
      )}
    </div>
  );
}
