import { create } from "zustand";

// MBTI 키 타입 정의
export type MBTIKey = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

// MBTI 점수 타입
export type MBTIScores = {
  [key in MBTIKey]?: number;
};

interface AnswerStore {
  MBTI: MBTIScores;
  addScore: (score: MBTIScores) => void;
}
const useAnswerStore = create<AnswerStore>((set) => ({
  MBTI: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },

  // 점수 추가 함수
  addScore: (score) =>
    set((state) => {
      // 기존 MBTI 점수 복사
      const newMBTI = { ...state.MBTI };
      // score 객체의 각 키 순회
      Object.keys(score).forEach((key) => {
        // 해당 키가 MBTI 키인지 확인 (타입 가드)
        if (key in newMBTI) {
          // 해당 MBTI 유형의 점수 +1 증가
          newMBTI[key as MBTIKey] = (newMBTI[key as MBTIKey] || 0) + 1;
        }
      });

      return { MBTI: newMBTI };
    }),
}));

export default useAnswerStore;
