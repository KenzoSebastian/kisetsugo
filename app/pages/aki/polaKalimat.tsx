import KatobaPolaKalimatSection from "@/components/Section/Katoba&PolaKalimatSection";

const AkiPolaKalimat = () => {
  return (
    <KatobaPolaKalimatSection
      bgImage={require("@/assets/images/background/aki.png")}
      contentText={require("@/assets/images/polaKalimat/polaKalimat-aki.png")}
      weather="aki"
      type="polaKalimat"
    />
  );
};

export default AkiPolaKalimat;
