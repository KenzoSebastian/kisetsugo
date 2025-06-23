import { RootStackParamList } from "@/app";
import { WrapperBgImage } from "@/components/Layout/WrapperBgImage";
import { THEMES } from "@/style/colors";
import { globalStyle } from "@/style/global.style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const Closing = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <WrapperBgImage src={require("@/assets/images/background/closing.png")}>
      <View style={{ alignItems: "center", marginTop: 150, gap: 10 }}>
        <View style={{ ...styles.container, paddingHorizontal: 60 }}>
          <Image
            source={require("@/assets/images/closing-japan.png")}
            style={{ width: 230, height: 80, resizeMode: "contain" }}
          />
        </View>
        <View style={{ ...styles.container, paddingHorizontal: 10 }}>
          <Image
            source={require("@/assets/images/closing-indo.png")}
            style={{ width: 370, height: 100, resizeMode: "contain" }}
          />
        </View>
      </View>
      <Image
        source={require("@/assets/images/person/excited-person.png")}
        style={globalStyle.personPrimary}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.popTo("menu")}
        style={styles.homeButton}
      >
        <Image
          source={require("@/assets/images/home.png")}
          style={{ width: 130, height: 130 }}
        />
      </TouchableOpacity>
      <Image
        source={require("@/assets/images/copyright.png")}
        style={{
          position: "absolute",
          bottom: -10,
          left: -25,
          width: 210,
          height: 90,
          resizeMode: "contain",
        }}
      />
    </WrapperBgImage>
  );
};

const styles = StyleSheet.create({
  homeButton: {
    position: "absolute",
    bottom: 85,
  },
  container: {
    borderRadius: 20,
    backgroundColor: THEMES.default.backgroundTheme,
  },
});

export default Closing;
