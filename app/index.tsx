import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HaruFunFact from "./pages/haru/funFact";
import HaruKatoba from "./pages/haru/katoba";
import HaruLatihan from "./pages/haru/latihan";
import HaruMain from "./pages/haru/main";
import HaruPolaKalimat from "./pages/haru/polaKalimat";
import Loading from "./pages/loading";
import Main from "./pages/main";
import Menu from "./pages/menu";

const pages = createNativeStackNavigator();

type pagesScreenType = {
  name: string;
  component: () => React.JSX.Element;
};
const pagesScreen: pagesScreenType[] = [
  {
    name: "main",
    component: Main,
  },
  {
    name: "menu",
    component: Menu,
  },
  {
    name: "loading",
    component: Loading,
  },
  // Haru pages
  {
    name: "haruMain",
    component: HaruMain,
  },
  {
    name: "haruFunFact",
    component: HaruFunFact,
  },
  {
    name: "haruKatoba",
    component: HaruKatoba,
  },
  {
    name: "haruPolaKalimat",
    component: HaruPolaKalimat,
  },
  {
    name: "haruLatihan",
    component: HaruLatihan,
  },
];

export default function Index() {
  return (
    <pages.Navigator initialRouteName="main">
      {pagesScreen.map((page) => (
        <pages.Screen
          key={page.name}
          name={page.name}
          component={page.component}
          options={{ headerShown: false }}
        />
      ))}
    </pages.Navigator>
  );
}

type PageName = (typeof pagesScreen)[number]["name"];

export type RootStackParamList = {
  [K in PageName]: undefined | { data: any };
};
