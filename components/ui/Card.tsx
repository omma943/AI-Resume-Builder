import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg transition hover:-translate-y-2 hover:border-blue-500 ${className}`}
    >
      {children}
    </div>
  );
}