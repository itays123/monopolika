import strings from "../../strings";
import MultiLineText from "../base/MultiLineText";

export default function HomeHeader() {
  return (
    <header className="bg-gradient-to-br gradient-cyan">
      <div className="container flex justify-between items-end gap-32">
        <div className="text-slate-50 pb-16  pt-32 flex-initial">
          <h1 className="text-[96px] font-bold">
            <MultiLineText text={strings.HELLO} />
          </h1>
          <p className="text-3xl">
            <MultiLineText text={strings.ABOUT_ME} />
          </p>
        </div>
        <div className="w-[512px] h-[512px] bg-slate-400 flex-none"></div>
      </div>
    </header>
  );
}
