import { RootStackParamList } from "@/app";
import FunFactSection from "@/components/Section/FunFactSection";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";

const HaruFunFact = () => {
    const navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <FunFactSection
      bgImage={require("@/assets/images/background/haru.png")}
      textFunFactImage={require("@/assets/images/funFact/haru-funFact.png")}
      handleNext={() => navigation.navigate("haruMain")}
    />
  );
};

export default HaruFunFact;
