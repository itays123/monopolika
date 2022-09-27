import clsx from "clsx";
import { ClassName } from "../types";
import { InstagramIcon, WhatsAppIcon } from "./mediaIcons";

export interface IContactMeProps extends ClassName {
  label: string;
}

export default function ContactMe({ className, label }: IContactMeProps) {
  return (
    <div className={clsx("flex gap-2 items-center max-h-12 py-2 ", className)}>
      <div className="text-lg">{label}</div>
      <WhatsAppIcon className="w-6 h-auto" />
      <InstagramIcon className="w-6 h-auto" />
    </div>
  );
}
