import { RootStackParamList } from "@/app";
import FunFactSection from "@/components/Section/FunFactSection";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const NatsuFunFact = () => {
    const navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <FunFactSection
      bgImage={require("@/assets/images/background/natsu.png")}
      textFunFactImage={require("@/assets/images/funFact/natsu-funFact.png")}
      handleNext={() => navigation.navigate("natsuMain")}
    />
  );
};

export default NatsuFunFact;
