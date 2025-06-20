import { RootStackParamList } from "@/app";
import { WrapperBgImage } from "@/components/Layout/WrapperBgImage";
import { THEMES } from "@/style/colors";
import { globalStyle } from "@/style/global.style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Menu = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <WrapperBgImage src={require("@/assets/images/background/main.png")}>
      <View
        style={{
          justifyContent: "flex-end",
          ...globalStyle.navHeader,
        }}
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={globalStyle.buttonPrimary}
        />
      </View>
      <Image
        source={require("@/assets/images/person/excited-person.png")}
        style={globalStyle.personPrimary}
      />
      <View style={{ position: "absolute", bottom: 40, alignItems: "center" }}>
        <View style={styles.containerWeather}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate("loading", { data: "haru" });
            }}
          >
            <Image
              source={require("@/assets/images/weather/haru.png")}
              style={globalStyle.buttonPrimary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate("loading", { data: "natsu" });
            }}
          >
            <Image
              source={require("@/assets/images/weather/natsu.png")}
              style={globalStyle.buttonPrimary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate("loading", { data: "aki" });
            }}
          >
            <Image
              source={require("@/assets/images/weather/aki.png")}
              style={globalStyle.buttonPrimary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate("loading", { data: "fuyu" });
            }}
          >
            <Image
              source={require("@/assets/images/weather/fuyu.png")}
              style={globalStyle.buttonPrimary}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containerDescription}>
          <Text style={{ textAlign: "center", fontWeight: 900 }}>
            Pilih salah satu icon musim!
          </Text>
        </View>
      </View>
    </WrapperBgImage>
  );
};
export default Menu;

const styles = StyleSheet.create({
  containerWeather: {
    backgroundColor: THEMES.default.backgroundTheme,
    width: "98%",
    flexDirection: "row",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerDescription: {
    marginTop: 20,
    backgroundColor: THEMES.default.backgroundTheme,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
});
