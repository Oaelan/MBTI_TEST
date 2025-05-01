// 최적화된 방식 (더 작은 번들 사이즈)
import * as m from "motion/react-m";
import NavigateButton from "../components/button/Button";
export default function Home() {
  return (
    <m.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="base-container center"
    >
      <m.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        MBTI TEST
      </m.h1>
      <m.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          type: "spring",
        }}
      >
        <NavigateButton href="/questions" variant="primary">
          시작하기
        </NavigateButton>
      </m.div>
    </m.main>
  );
}
