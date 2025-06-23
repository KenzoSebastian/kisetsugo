import LatihanSection from "@/components/Section/LatihanSection";

const HaruLatihan = () => {
  return (
    <LatihanSection
      bgImage={require("@/assets/images/background/haru.png")}
      logoImage={require("@/assets/images/weather/logo-haru.png")}
      weather="haru"
    />
  );
};

export default HaruLatihan;
