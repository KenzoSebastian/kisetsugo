import { RootStackParamList } from "@/app";
import { THEMES } from "@/style/colors";
import { globalStyle } from "@/style/global.style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { WrapperBgImage } from "../Layout/WrapperBgImage";

type WrongSectionProps = {
  bgImage: ImageSourcePropType | undefined;
};

const WrongSection = ({ bgImage }: WrongSectionProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Pressable style={{ flex: 1 }} onPress={() => navigation.pop()}>
      <WrapperBgImage src={bgImage}>
        <View style={styles.container}>
          <Image
            source={require("@/assets/images/salah.png")}
            style={{ width: 340, height: 70 }}
          />
        </View>
        <Image
          source={require("@/assets/images/person/decline-person.png")}
          style={globalStyle.personPrimary}
        />
      </WrapperBgImage>
    </Pressable>
  );
};

export default WrongSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEMES.default.backgroundTheme,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 130,
  },
});
