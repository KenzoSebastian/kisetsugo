import CorrectSection from "@/components/Section/CorrectSection";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "..";

const CorrectAnswer = () => {
  const route = useRoute();
  const data = (route.params as RootStackParamList["correct"] | undefined)
    ?.data;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  switch (data.weather) {
    case "haru":
      return (
        <CorrectSection
          bgImage={require("@/assets/images/background/haru.png")}
          next={() => navigation.navigate(`haruSoal${data.nomorSoal + 1}`)}
        />
      );
    case "natsu":
      return (
        <CorrectSection
          bgImage={require("@/assets/images/background/natsu.png")}
          next={() => navigation.navigate(`natsuSoal${data.nomorSoal + 1}`)}
        />
      );
    case "aki":
      return (
        <CorrectSection
          bgImage={require("@/assets/images/background/aki.png")}
          next={() => navigation.navigate(`akiSoal${data.nomorSoal + 1}`)}
        />
      );
    case "fuyu":
      return (
        <CorrectSection
          bgImage={require("@/assets/images/background/fuyu.png")}
          next={() => navigation.navigate(`fuyuSoal${data.nomorSoal + 1}`)}
        />
      );
  }
};

export default CorrectAnswer;
