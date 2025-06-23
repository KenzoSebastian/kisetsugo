import LatihanSection from "@/components/Section/LatihanSection";

const NatsuLatihan = () => {
  return (
    <LatihanSection
      bgImage={require("@/assets/images/background/natsu.png")}
      logoImage={require("@/assets/images/weather/logo-natsu.png")}
      weather="natsu"
    />
  );
};

export default NatsuLatihan;
