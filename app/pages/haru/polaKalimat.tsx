import KatobaPolaKalimatSection from "@/components/Section/Katoba&PolaKalimatSection";

const HaruPolaKalimat = () => {
  return (
    <KatobaPolaKalimatSection
      bgImage={require("@/assets/images/background/haru.png")}
      contentText={require("@/assets/images/polaKalimat/polaKalimat-haru.png")}
      weather="haru"
      type="polaKalimat"
    />
  );
};

export default HaruPolaKalimat;
