import { THEMES } from "@/style/colors";
import { globalStyle } from "@/style/global.style";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { WrapperBgImage } from "../Layout/WrapperBgImage";

type CorrectSectionProps = {
  bgImage: ImageSourcePropType | undefined;
  next: () => void;
};

const CorrectSection = ({ bgImage, next }: CorrectSectionProps) => {
  return (
    <Pressable style={{ flex: 1 }} onPress={next}>
      <WrapperBgImage src={bgImage}>
        <View style={styles.container}>
          <Image
            source={require("@/assets/images/benar.png")}
            style={{ width: 170, height: 75 }}
          />
        </View>
        <Image
          source={require("@/assets/images/person/excited-person.png")}
          style={globalStyle.personPrimary}
        />
      </WrapperBgImage>
    </Pressable>
  );
};

export default CorrectSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEMES.default.backgroundTheme,
    borderRadius: 15,
    paddingHorizontal: 60,
    paddingVertical: 10,
    marginTop: 130,
  },
});
