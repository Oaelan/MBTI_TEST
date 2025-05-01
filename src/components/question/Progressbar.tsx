import * as m from "motion/react-m";
interface ProgressbarProps {
  currentId: number;
  totalQuestions: number;
}

export default function Progressbar({
  currentId,
  totalQuestions,
}: ProgressbarProps) {
  const progress = (currentId / totalQuestions) * 100;
  return (
    <m.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{ duration: 1 }}
      className="mb-10 bg-purple rounded-full w-full h-[3%]"
    >
      <m.div
        style={{ width: `${progress}%` }}
        initial={{ width: `${progress - 10}%` }}
        animate={{ width: `${progress}%` }}
        className="bg-pink rounded-full w-full h-full"
      ></m.div>
    </m.div>
  );
}
