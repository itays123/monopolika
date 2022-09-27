import strings, { links } from "../../strings";
import ContactMe from "../media/ContactMe";

export default function Footer() {
  return (
    <div className="bg-slate-200">
      <div className="container space-y-2 flex justify-between">
        <ContactMe label={strings.CONTACT_ME} className="text-slate-900" />
        <div>
          {strings.CREATED_BY}
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {strings.ITAY}
          </a>
        </div>
      </div>
    </div>
  );
}
