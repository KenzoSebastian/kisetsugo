import Detail from "@/pages/detail";
import Main from "@/pages/main";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const pages = createNativeStackNavigator();

export default function Index() {
  return (
    <pages.Navigator>
      <pages.Screen
        name="main"
        component={Main}
        options={{ headerShown: false }}
      />
      <pages.Screen
        name="detail"
        component={Detail}
        options={{ headerShown: false }}
      />
    </pages.Navigator>
  );
}
