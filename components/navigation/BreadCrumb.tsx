import clsx from "clsx";
import Link from "next/link";
import { ClassName } from "../types";
import styles from "./breadcrumb.module.css";

export interface ILink {
  label: string;
  href: string;
}

export interface BreadCrumbProps extends ClassName {
  paths: ILink[];
}

export default function BreadCrumb({ className, paths }: BreadCrumbProps) {
  return (
    <div className={clsx("flex", className)}>
      {paths.map(({ label, href }) => (
        <Link href={href} key={href}>
          <span
            className={clsx(
              "text-2xl cursor-pointer last:font-semibold",
              styles.breadcrumb
            )}
          >
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
}
