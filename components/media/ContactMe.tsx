import clsx from "clsx";
import { links } from "../../strings";
import ExternalLink from "../base/ExternalLink";
import { ClassName } from "../types";
import { InstagramIcon, WhatsAppIcon } from "./mediaIcons";

export interface IContactMeProps extends ClassName {
  label: string;
}

export default function ContactMe({ className, label }: IContactMeProps) {
  return (
    <div className={clsx("flex gap-2 items-center max-h-12 py-2 ", className)}>
      <div className="text-lg">{label}</div>
      <ExternalLink href={links.whatsapp}>
        <WhatsAppIcon className="w-6 h-auto" />
      </ExternalLink>
      <ExternalLink href={links.instagram}>
        <InstagramIcon className="w-6 h-auto" />
      </ExternalLink>
    </div>
  );
}
