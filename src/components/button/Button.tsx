"use client";
import * as m from "motion/react-m";
import { useRouter } from "next/navigation";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  href?: string;
}
const ButtonsClass = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  tertiary: "btn-tertiary",
};

export default function NavigateButton({
  children,
  variant = "primary",
  href,
}: ButtonProps) {
  const router = useRouter();
  const handleClick = () => {
    //href가 있으면 페이지 이동
    if (href) {
      router.push(href);
    }
  };
  return (
    <m.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className={ButtonsClass[variant]}
    >
      {children}
    </m.button>
  );
}
