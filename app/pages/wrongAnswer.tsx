import WrongSection from "@/components/Section/WrongSection";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { RootStackParamList } from "..";

const WrongAnswer = () => {
  const route = useRoute();
  const data = (route.params as RootStackParamList["wrong"] | undefined)?.data;

  switch (data) {
    case "haru":
      return (
        <WrongSection
          bgImage={require("@/assets/images/background/haru.png")}
        />
      );
    case "natsu":
      return (
        <WrongSection
          bgImage={require("@/assets/images/background/natsu.png")}
        />
      );
    case "aki":
      return (
        <WrongSection bgImage={require("@/assets/images/background/aki.png")} />
      );
    case "fuyu":
      return (
        <WrongSection
          bgImage={require("@/assets/images/background/fuyu.png")}
        />
      );
  }
};

export default WrongAnswer;
