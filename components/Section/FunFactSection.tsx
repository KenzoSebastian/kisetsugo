import { THEMES } from "@/style/colors";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { WrapperBgImage } from "../Layout/WrapperBgImage";

type FunFactSectionProps = {
  weather?: "haru" | "fuyu" | "natsu" | "aki" | undefined;
  bgImage: ImageSourcePropType | undefined;
  textFunFactImage: ImageSourcePropType | undefined;
  handleNext: () => void;
};

const FunFactSection = ({
  weather,
  bgImage,
  textFunFactImage,
  handleNext,
}: FunFactSectionProps) => {
  return (
    <WrapperBgImage src={bgImage}>
      <Image
        source={require("@/assets/images/person/fun-person.png")}
        style={styles.personImage}
      />
      <View
        style={{
          width: "100%",
          height: "100%",
          paddingTop: 150,
          alignItems: "center",
        }}
      >
        <View style={styles.container}>
          <Image
            source={textFunFactImage}
            style={{ width: "100%", height: 400 }}
          />
        </View>
        {weather === "aki" && (
          <Image
            source={require("@/assets/images/tree.png")}
            style={{
              width: "50%",
              height: 200,
              position: "absolute",
              bottom: 125,
              right: 20,
            }}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ ...styles.nextButtonContainer, width: 180, height: 180 }}
          onPress={handleNext}
        >
          <Image
            source={require("@/assets/images/next.png")}
            style={styles.nextButton}
          />
        </TouchableOpacity>
      </View>
    </WrapperBgImage>
  );
};

export default FunFactSection;

const styles = StyleSheet.create({
  personImage: {
    width: 250,
    height: 250,
    position: "absolute",
    bottom: 0,
    left: -60,
    zIndex: 50,
  },
  container: {
    width: "90%",
    backgroundColor: THEMES.default.backgroundTheme,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 50,
  },
  nextButtonContainer: {
    position: "absolute",
    bottom: 60,
    right: 20,
  },
  nextButton: {
    width: 180,
    height: 180,
  },
});
