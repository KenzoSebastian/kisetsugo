import KatobaPolaKalimatSection from "@/components/Section/Katoba&PolaKalimatSection";

const NatsuPolaKalimat = () => {
  return (
    <KatobaPolaKalimatSection
      bgImage={require("@/assets/images/background/natsu.png")}
      contentText={require("@/assets/images/polaKalimat/polaKalimat-natsu.png")}
      weather="natsu"
      type="polaKalimat"
    />
  );
};

export default NatsuPolaKalimat;
