import MainWeatherSection from "@/components/Section/MainWeatherSection";

const NatsuMain = () => {
  return (
    <MainWeatherSection
      weather="natsu"
      bgImage={require("@/assets/images/background/natsu.png")}
      headerImage={require("@/assets/images/mainWeather/heading-natsu.png")}
      logoHeaderImage={require("@/assets/images/weather/logo-natsu.png")}
    />
  );
};

export default NatsuMain;
