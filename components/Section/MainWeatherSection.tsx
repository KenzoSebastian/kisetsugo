import { globalStyle } from "@/style/global.style";
import React from "react";
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity } from "react-native";
import { WrapperBgImage } from "../Layout/WrapperBgImage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app";

type MainWeatherSectionProps = {
  weather?: string | undefined;
  bgImage: ImageSourcePropType | undefined;
  headerImage: ImageSourcePropType | undefined;
  // textFunFactImage: ImageSourcePropType | undefined;
  handleNext: () => void;
};

const MainWeatherSection = ({
  weather,
  bgImage,
  headerImage,
  // textFunFactImage,
  handleNext,
}: MainWeatherSectionProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <WrapperBgImage src={bgImage}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.popToTop()}
        style={globalStyle.navHeader}
      >
        <Image
          source={require("@/assets/images/home.png")}
          style={globalStyle.buttonPrimary}
        />
      </TouchableOpacity>
      <Image source={headerImage} style={styles.header} />
    </WrapperBgImage>
  );
};

export default MainWeatherSection;

const styles = StyleSheet.create({
  header: {
    width: 260,
    height: 260,
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
});
