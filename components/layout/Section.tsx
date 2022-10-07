import clsx from "clsx";
import { ClassName, Container } from "../types";

export interface SectionProps extends ClassName, Container {
  title: string;
}

export default function Section({ className, children, title }: SectionProps) {
  return (
    <section className={clsx("container", className)}>
      <h2 className="section-title pb-4">{title}</h2>
      {children}
    </section>
  );
}
