import MainWeatherSection from "@/components/Section/MainWeatherSection";

const FuyuMain = () => {
  return (
    <MainWeatherSection
      weather="fuyu"
      bgImage={require("@/assets/images/background/fuyu.png")}
      headerImage={require("@/assets/images/mainWeather/heading-fuyu.png")}
      logoHeaderImage={require("@/assets/images/weather/logo-fuyu.png")}
    />
  );
};

export default FuyuMain;
