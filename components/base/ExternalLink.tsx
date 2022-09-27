import { ClassName, Container } from "../types";

export interface IExternalLinkProps extends ClassName, Container {
  href: string;
}

export default function ExternalLink({
  className,
  children,
  href,
}: IExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
