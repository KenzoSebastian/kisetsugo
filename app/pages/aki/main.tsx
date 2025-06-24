import MainWeatherSection from "@/components/Section/MainWeatherSection";

const AkiMain = () => {
  return (
    <MainWeatherSection
      weather="aki"
      bgImage={require("@/assets/images/background/aki.png")}
      headerImage={require("@/assets/images/mainWeather/heading-aki.png")}
      logoHeaderImage={require("@/assets/images/weather/logo-aki.png")}
    />
  );
};

export default AkiMain;
