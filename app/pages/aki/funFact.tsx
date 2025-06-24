import { RootStackParamList } from "@/app";
import FunFactSection from "@/components/Section/FunFactSection";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const AkiFunFact = () => {
    const navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <FunFactSection
      bgImage={require("@/assets/images/background/aki.png")}
      textFunFactImage={require("@/assets/images/funFact/aki-funFact.png")}
      handleNext={() => navigation.navigate("akiMain")}
      weather="aki"
    />
  );
};

export default AkiFunFact;
