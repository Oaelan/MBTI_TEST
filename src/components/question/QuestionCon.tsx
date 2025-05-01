"use client";
import { questions } from "@/data/questions.json";
import { useState } from "react";
import Result from "./Reuslt";
import { MBTIType, Option } from "@/types/mbtiType";
import QuestionList from "./QuestionList";
import useAnswerStore from "@/store/useAnswerStore";
export default function QuestionCon() {
  const { addScore } = useAnswerStore();
  //질문 리스트
  const questionList = questions; //현재 질문의 Id
  const [currentId, setCurrentId] = useState<number>(0);
  // 현재 표시할 질문
  const currentQuestion = questionList[currentId];
  // 결과 컴포넌트 보여주기 위한 상태값
  const [isLast, setIsLast] = useState<boolean>(false);
  //질문 선택 시 다름 질문으로 이동
  const handleSelectOption = (type: MBTIType) => {
    addScore(type);
    console.log(type);
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
          options={currentQuestion.options as Option[]}
          onClick={handleSelectOption}
        />
      )}
    </div>
  );
}
