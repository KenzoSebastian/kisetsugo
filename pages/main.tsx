import { useNavigation } from "expo-router";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const Main = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("@/assets/images/bg-main.png")}
      style={styles.imageBg}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={require("@/assets/images/exit.png")}
            style={{
              width: 75,
              height: 75,
            }}
          />
        </TouchableOpacity>
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: 75, height: 75 }}
        />
      </View>
      <Image
        source={require("@/assets/images/main-person.png")}
        style={styles.person}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => console.log("click play")}
        style={styles.playButton}
      >
        <Image
          source={require("@/assets/images/start.png")}
          style={{ width: 130, height: 130 }}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
  },
  person: {
    width: 500,
    height: 500,
    position: "absolute",
    bottom: -10,
  },
  playButton: {
    position: "absolute",
    bottom: 85,
  },
});

export default Main;
