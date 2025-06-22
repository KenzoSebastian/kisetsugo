import { RootStackParamList } from "@/app";
import { THEMES } from "@/style/colors";
import { globalStyle } from "@/style/global.style";
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

type MainWeatherSectionProps = {
  weather: "haru" | "fuyu" | "natsu" | "aki";
  bgImage: ImageSourcePropType | undefined;
  headerImage: ImageSourcePropType | undefined;
  logoHeaderImage: ImageSourcePropType | undefined;
};

const MainWeatherSection = ({
  weather,
  bgImage,
  headerImage,
  logoHeaderImage,
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
      <View style={{ position: "absolute", top: 90, alignItems: "center" }}>
        <Image source={logoHeaderImage} style={{ width: 120, height: 120 }} />
        <Image source={headerImage} style={styles.header} />
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingBottom: 150,
          gap: 50,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate(`${weather}Katoba`)}
          style={styles.container}
        >
          <Image
            source={require("@/assets/images/katoba.png")}
            style={{ width: 420, height: 105, position: "absolute", top: -10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate(`${weather}PolaKalimat`)}
          style={styles.container}
        >
          <Image
            source={require("@/assets/images/pola-kalimat.png")}
            style={{
              width: 420,
              height: 130,
              position: "absolute",
              top: -35,
              right: -10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate(`${weather}Latihan`)}
          style={styles.container}
        >
          <Image
            source={require("@/assets/images/latihan.png")}
            style={{
              width: 420,
              height: 110,
              position: "absolute",
              top: -20,
              left: 20,
            }}
          />
        </TouchableOpacity>
        {weather === "aki" && (
          <Image
            source={require("@/assets/images/tree.png")}
            style={{
              width: 220,
              height: 220,
              position: "absolute",
              bottom: 0,
            }}
          />
        )}
      </View>
    </WrapperBgImage>
  );
};

export default MainWeatherSection;

const styles = StyleSheet.create({
  header: {
    width: 260,
    height: 100,
    resizeMode: "contain",
  },
  container: {
    width: "90%",
    height: 80,
    backgroundColor: THEMES.default.backgroundTheme,
    borderRadius: 15,
    overflow: "visible",
    position: "relative",
  },
});
