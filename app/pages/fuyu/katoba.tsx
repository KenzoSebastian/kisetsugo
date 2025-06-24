import KatobaPolaKalimatSection from "@/components/Section/Katoba&PolaKalimatSection";

const FuyuKatoba = () => {
  return (
    <KatobaPolaKalimatSection
      bgImage={require("@/assets/images/background/fuyu.png")}
      contentText={require("@/assets/images/katoba/fuyu-katoba.png")}
      weather="fuyu"
      type="katoba"
    />
  );
};

export default FuyuKatoba;
