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

type LatihanSectionProps = {
  bgImage: ImageSourcePropType | undefined;
  logoImage: ImageSourcePropType | undefined;
  weather: "haru" | "fuyu" | "natsu" | "aki";
};

const LatihanSection = ({ bgImage, logoImage, weather }: LatihanSectionProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <WrapperBgImage src={bgImage}>
      <View style={{ marginTop: 90, alignItems: "center" }}>
        <Image source={logoImage} style={styles.logo} />
        <View style={styles.container}>
          <Image
            source={require("@/assets/images/latihan/siap-berlatih.png")}
            style={{ height: 100, width: 260, resizeMode: "contain" }}
          />
        </View>
        <View
          style={{
            marginTop: 30,
            alignItems: "center",
            gap: 25,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.pop()}
          >
            <Image
              source={require("@/assets/images/cancel.png")}
              style={{ height: 100, width: 160, resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => {navigation.navigate(`${weather}Soal1`)}}>
            <Image
              source={require("@/assets/images/yes.png")}
              style={{ height: 100, width: 160, resizeMode: "contain" }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require("@/assets/images/person/excited-person.png")}
        style={styles.personImage}
      />
    </WrapperBgImage>
  );
};

export default LatihanSection;

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
  },
  container: {
    backgroundColor: THEMES.default.backgroundTheme,
    borderRadius: 15,
    paddingHorizontal: 60,
    paddingVertical: 20,
    marginTop: 45,
  },
  personImage: {
    width: 370,
    height: 370,
    position: "absolute",
    bottom: -40,
    right: -70,
  },
});
