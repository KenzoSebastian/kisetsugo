import CorrectSection from "@/components/Section/CorrectSection";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { ImageSourcePropType } from "react-native";
import { RootStackParamList } from "..";

const bgImages: Record<string, ImageSourcePropType> = {
  haru: require("@/assets/images/background/haru.png"),
  natsu: require("@/assets/images/background/natsu.png"),
  aki: require("@/assets/images/background/aki.png"),
  fuyu: require("@/assets/images/background/fuyu.png"),
};

const nextSoalScreens = (weather: string, nomorSoal: number) =>
  `${weather}Soal${nomorSoal + 1}`;

const CorrectAnswer = () => {
  const route = useRoute();
  const data = (route.params as RootStackParamList["correct"] | undefined)
    ?.data;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  if (!data) return undefined;

  const { weather, nomorSoal } = data;
  const bgImage = bgImages[weather];

  if (nomorSoal === 4) {
    return (
      <CorrectSection
        bgImage={bgImage}
        next={() => navigation.navigate("closing")}
      />
    );
  }

  return (
    <CorrectSection
      bgImage={bgImage}
      next={() => navigation.navigate(nextSoalScreens(weather, nomorSoal))}
    />
  );
};

export default CorrectAnswer;
