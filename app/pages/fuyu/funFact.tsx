import { RootStackParamList } from "@/app";
import FunFactSection from "@/components/Section/FunFactSection";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const FuyuFunFact = () => {
    const navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <FunFactSection
      bgImage={require("@/assets/images/background/fuyu.png")}
      textFunFactImage={require("@/assets/images/funFact/fuyu-funFact.png")}
      handleNext={() => navigation.navigate("fuyuMain")}
    />
  );
};

export default FuyuFunFact;
