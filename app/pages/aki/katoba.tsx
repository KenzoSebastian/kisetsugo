import KatobaPolaKalimatSection from "@/components/Section/Katoba&PolaKalimatSection";

const AkiKatoba = () => {
  return (
    <KatobaPolaKalimatSection
      bgImage={require("@/assets/images/background/aki.png")}
      contentText={require("@/assets/images/katoba/aki-katoba.png")}
      weather="aki"
      type="katoba"
    />
  );
};

export default AkiKatoba;
