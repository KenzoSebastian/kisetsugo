import MainWeatherSection from "@/components/Section/MainWeatherSection";
import React from "react";

const HaruMain = () => {
  return (
    <MainWeatherSection
      bgImage={require("@/assets/images/background/haru.png")}
      headerImage={require("@/assets/images/mainWeather/heading-haru.png")}
      handleNext={() => {}}
    />
  );
};

export default HaruMain;
