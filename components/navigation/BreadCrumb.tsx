import clsx from "clsx";
import Link from "next/link";
import { ClassName } from "../types";

export interface ILink {
  label: string;
  href: string;
}

export interface BreadCrumbProps extends ClassName {
  paths: ILink[];
}

export default function BreadCrumb({ className, paths }: BreadCrumbProps) {
  return (
    <div className={clsx("flex gap-2", className)}>
      {paths.map(({ label, href }) => (
        <Link href={href} key={href}>
          <span className="text-2xl">{label}</span>
        </Link>
      ))}
    </div>
  );
}
