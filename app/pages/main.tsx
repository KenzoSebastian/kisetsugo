import { RootStackParamList } from "@/app";
import { WrapperBgImage } from "@/components/Layout/WrapperBgImage";
import { globalStyle } from "@/style/global.style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  BackHandler,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const Main = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <WrapperBgImage src={require("@/assets/images/background/main.png")}>
      <View
        style={{
          justifyContent: "space-between",
          ...globalStyle.navHeader,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => BackHandler.exitApp()}
        >
          <Image
            source={require("@/assets/images/exit.png")}
            style={globalStyle.buttonPrimary}
          />
        </TouchableOpacity>
        <Image
          source={require("@/assets/images/logo.png")}
          style={globalStyle.buttonPrimary}
        />
      </View>
      <Image
        source={require("@/assets/images/person/main-person.png")}
        style={globalStyle.personPrimary}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate("menu")}
        style={styles.playButton}
      >
        <Image
          source={require("@/assets/images/start.png")}
          style={{ width: 130, height: 130 }}
        />
      </TouchableOpacity>
    </WrapperBgImage>
  );
};

const styles = StyleSheet.create({
  playButton: {
    position: "absolute",
    bottom: 85,
  },
});

export default Main;
