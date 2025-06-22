import { RootStackParamList } from "@/app";
import { THEMES } from "@/style/colors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { WrapperBgImage } from "../Layout/WrapperBgImage";

type KatobaPolaKalimatSectionProps = {
  type: "katoba" | "polaKalimat";
  weather?: "haru" | "fuyu" | "natsu" | "aki" | undefined;
  bgImage: ImageSourcePropType | undefined;
  contentText: ImageSourcePropType | undefined;
};

const KatobaPolaKalimatSection = ({
  weather,
  bgImage,
  contentText,
  type,
}: KatobaPolaKalimatSectionProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <WrapperBgImage src={bgImage}>
      <View
        style={{
          width: "100%",
          height: "100%",
          paddingTop: 150,
          alignItems: "center",
        }}
      >
        <View
          style={{
            ...styles.container,
            paddingTop: type === "katoba" ? 30 : weather !== "haru" ? 30 : 0,
            paddingBottom: weather === "aki" ? 60 : 30,
          }}
        >
          <Image
            source={contentText}
            style={{
              width: "100%",
              height: type === "katoba" ? 450 : weather === "fuyu" ? 470 : 420,
            }}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            ...styles.prevButtonContainer,
            right: weather === "aki" && type === "katoba" ? 50 : "auto",
          }}
          onPress={() => navigation.pop()}
        >
          <Image
            source={require("@/assets/images/prev.png")}
            style={styles.prevButton}
          />
        </TouchableOpacity>
        {weather === "aki" && type === "katoba" && (
          <Image
            source={require("@/assets/images/tree2.png")}
            style={{
              position: "absolute",
              bottom: 0,
              width: 200,
              height: 200,
              left: 0,
            }}
          />
        )}
      </View>
    </WrapperBgImage>
  );
};

export default KatobaPolaKalimatSection;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: THEMES.default.backgroundTheme,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  prevButtonContainer: {
    position: "absolute",
    bottom: 60,
    width: 150,
    height: 75,
  },
  prevButton: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
