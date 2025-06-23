import KatobaPolaKalimatSection from "@/components/Section/Katoba&PolaKalimatSection";

const NatsuKatoba = () => {
  return (
    <KatobaPolaKalimatSection
      bgImage={require("@/assets/images/background/natsu.png")}
      contentText={require("@/assets/images/katoba/natsu-katoba.png")}
      weather="natsu"
      type="katoba"
    />
  );
};

export default NatsuKatoba;
