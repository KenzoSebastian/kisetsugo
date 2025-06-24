import KatobaPolaKalimatSection from "@/components/Section/Katoba&PolaKalimatSection";

const FuyuPolaKalimat = () => {
  return (
    <KatobaPolaKalimatSection
      bgImage={require("@/assets/images/background/fuyu.png")}
      contentText={require("@/assets/images/polaKalimat/polaKalimat-fuyu.png")}
      weather="fuyu"
      type="polaKalimat"
    />
  );
};

export default FuyuPolaKalimat;
