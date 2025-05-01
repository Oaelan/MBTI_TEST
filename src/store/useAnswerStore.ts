import { MBTIType } from "@/types/mbtiType";
import { create } from "zustand";
type Result = MBTIType[];

interface AnswerStore {
  result: Result;
  addScore: (type: MBTIType) => void;
  getResult: () => string | undefined;
}

const useAnswerStore = create<AnswerStore>((set) => ({
  // 선택한 결과 저장
  result: [],
  // 결과 저장
  addScore: (type) => set((state) => ({ result: [...state.result, type] })),
  // MBTI 결과 계산
  getResult: () => {
    let mbti = "";
    const answers = useAnswerStore.getState().result;
    if (answers) {
      const first = answers.slice(0, 3);
      // 배열 M에서 E와 I 개수 세기
      const countE = first.filter((type) => type === "E").length;
      const countI = first.filter((type) => type === "I").length;
      if (countE > countI) {
        mbti += "E";
      } else if (countE < countI) {
        mbti += "I";
      }
      const second = answers.slice(3, 6);
      const countN = second.filter((type) => type === "N").length;
      const countS = second.filter((type) => type === "S").length;
      if (countN > countS) {
        mbti += "N";
      } else if (countN < countS) {
        mbti += "S";
      }

      const third = answers.slice(6, 9);
      const countT = third.filter((type) => type === "T").length;
      const countF = third.filter((type) => type === "F").length;
      if (countT > countF) {
        mbti += "T";
      } else if (countT < countF) {
        mbti += "F";
      }

      const fourth = answers.slice(9, 12);
      const countJ = fourth.filter((type) => type === "J").length;
      const countP = fourth.filter((type) => type === "P").length;
      if (countJ > countP) {
        mbti += "J";
      } else if (countJ < countP) {
        mbti += "P";
      }
      return mbti;
    }
  },
}));

export default useAnswerStore;
