import KatobaPolaKalimatSection from "@/components/Section/Katoba&PolaKalimatSection";
import React from "react";

const HaruKatoba = () => {
  return (
    <KatobaPolaKalimatSection
      bgImage={require("@/assets/images/background/haru.png")}
      contentText={require("@/assets/images/katoba/haru-katoba.png")}
      weather="haru"
      type="katoba"
    />
  );
};

export default HaruKatoba;
