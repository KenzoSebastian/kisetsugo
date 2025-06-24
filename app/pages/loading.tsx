import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { RootStackParamList } from "..";
import { WrapperBgImage } from "@/components/Layout/WrapperBgImage";
import { THEMES } from "@/style/colors";


const Loading = () => {
  const route = useRoute();
  const data = (route.params as RootStackParamList["loading"] | undefined)
    ?.data;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(`${data}FunFact`);
    }, 2000);
  }, [data, navigation]);

  return (
    <WrapperBgImage src={require("@/assets/images/background/loading.png")}>
      <View style={styles.containerLoading}>
        <Image
          source={require("@/assets/images/loading-text.png")}
          style={{ width: "60%", height: 40 }}
        />
      </View>
    </WrapperBgImage>
  );
};

export default Loading;

const styles = StyleSheet.create({
  containerLoading: {
    position: "absolute",
    bottom: 140,
    width: "82%",
    alignItems: "center",
    paddingVertical: 40,
    borderRadius: 20,
    backgroundColor: THEMES.default.backgroundTheme,
  },
});
