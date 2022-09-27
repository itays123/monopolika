import strings from "../../strings";
import MultiLineText from "../base/MultiLineText";

export default function HomeHeader() {
  return (
    <header className="bg-gradient-to-br gradient-cyan">
      <div className="container flex justify-between items-end pt-32">
        <div className="text-slate-50 pb-16 flex-shrink">
          <h1 className="text-[96px] font-bold">
            <MultiLineText text={strings.HELLO} />
          </h1>
          <p className="text-3xl">
            <MultiLineText text={strings.ABOUT_ME} />
          </p>
        </div>
        <div className="w-60 h-60 bg-slate-400"></div>
      </div>
    </header>
  );
}
