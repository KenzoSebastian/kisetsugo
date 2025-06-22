import MainWeatherSection from "@/components/Section/MainWeatherSection";
import React from "react";

const HaruMain = () => {
  return (
    <MainWeatherSection
      weather="haru"
      bgImage={require("@/assets/images/background/haru.png")}
      headerImage={require("@/assets/images/mainWeather/heading-haru.png")}
      logoHeaderImage={require("@/assets/images/weather/logo-haru.png")}
    />
  );
};

export default HaruMain;
