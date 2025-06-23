import { RootStackParamList } from "@/app";
import { THEMES } from "@/style/colors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { WrapperBgImage } from "../Layout/WrapperBgImage";

type SoalSectionProps = {
  bgImage: ImageSourcePropType | undefined;
  soal: ImageSourcePropType | undefined;
  opsiA: ImageSourcePropType | undefined;
  opsiB: ImageSourcePropType | undefined;
  opsiC: ImageSourcePropType | undefined;
  opsiD: ImageSourcePropType | undefined;
  correctAnswer: "A" | "B" | "C" | "D";
  weather: "haru" | "fuyu" | "natsu" | "aki";
  type: "type1" | "type2";
  nomorSoal: number;
};

const SoalSection = ({
  bgImage,
  soal,
  opsiA,
  opsiB,
  opsiC,
  opsiD,
  weather,
  type,
  correctAnswer,
  nomorSoal,
}: SoalSectionProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <WrapperBgImage src={bgImage}>
      <View
        style={{ marginTop: type === "type1" ? 130 : 90, alignItems: "center" }}
      >
        <View
          style={{
            ...styles.container,
            backgroundColor:
              weather === "haru"
                ? THEMES.pink.backgroundTheme
                : weather === "natsu"
                ? THEMES.yellow.backgroundTheme
                : THEMES.default.backgroundTheme,
          }}
        >
          <Image source={soal} style={{ height: 170, width: 360 }} />
        </View>
        <View
          style={{
            marginTop: type === "type1" ? 60 : 30,
            alignItems: "center",
            gap: 25,
            flexDirection: type === "type1" ? "row" : "column",
            flexWrap: type === "type1" ? "wrap" : "nowrap",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              if (correctAnswer === "A") {
                navigation.navigate("correct", {
                  data: { weather, nomorSoal },
                });
              } else {
                navigation.navigate("wrong", { data: weather });
              }
            }}
            style={{
              backgroundColor: THEMES.pink.backgroundTheme,
              ...styles.opsiWrap,
            }}
          >
            <Image
              source={opsiA}
              style={{ height: 50, width: 90, resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              if (correctAnswer === "B") {
                navigation.navigate("correct", {
                  data: { weather, nomorSoal },
                });
              } else {
                navigation.navigate("wrong", { data: weather });
              }
            }}
            style={{
              backgroundColor: THEMES.yellow.backgroundTheme,
              ...styles.opsiWrap,
            }}
          >
            <Image
              source={opsiB}
              style={{ height: 50, width: 90, resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              if (correctAnswer === "C") {
                navigation.navigate("correct", {
                  data: { weather, nomorSoal },
                });
              } else {
                navigation.navigate("wrong", { data: weather });
              }
            }}
            style={{
              backgroundColor: THEMES.brown.backgroundTheme,
              ...styles.opsiWrap,
            }}
          >
            <Image
              source={opsiC}
              style={{ height: 50, width: 90, resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              if (correctAnswer === "D") {
                navigation.navigate("correct", {
                  data: { weather, nomorSoal },
                });
              } else {
                navigation.navigate("wrong", { data: weather });
              }
            }}
            style={{
              backgroundColor: THEMES.blue.backgroundTheme,
              ...styles.opsiWrap,
            }}
          >
            <Image
              source={opsiD}
              style={{ height: 50, width: 90, resizeMode: "contain" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </WrapperBgImage>
  );
};

export default SoalSection;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    paddingVertical: 20,
    marginTop: 45,
  },
  opsiWrap: {
    borderRadius: 20,
    paddingHorizontal: 30,
    overflow: "hidden",
  },
});
