import Image from "next/image";
import strings from "../../strings";
import MultiLineText from "../base/MultiLineText";
import ContactMe from "../media/ContactMe";
import me from "../../assets/me.png";

export default function HomeHeader() {
  return (
    <header className="bg-gradient-to-br gradient-cyan">
      <div className="container flex justify-between items-end gap-32">
        <div className="text-slate-50 pb-16 pt-32 flex-initial">
          <h1 className="text-[96px] font-bold">
            <MultiLineText text={strings.HELLO} />
          </h1>
          <p className="text-xl">
            <MultiLineText text={strings.ABOUT_ME} />
          </p>
          <ContactMe
            label={strings.CONTACT_ME_FOR_QUESTIONS}
            className="mt-4"
          />
        </div>
        <div className="flex-none max-w-[40%] flex items-end">
          <Image src={me} alt="" />
        </div>
      </div>
    </header>
  );
}
