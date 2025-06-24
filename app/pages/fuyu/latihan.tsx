import LatihanSection from "@/components/Section/LatihanSection";

const FuyuLatihan = () => {
  return (
    <LatihanSection
      bgImage={require("@/assets/images/background/fuyu.png")}
      logoImage={require("@/assets/images/weather/logo-fuyu.png")}
      weather="fuyu"
    />
  );
};

export default FuyuLatihan;
