import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HaruFunFact from "./pages/haru/funFact";
import HaruKatoba from "./pages/haru/katoba";
import HaruLatihan from "./pages/haru/latihan";
import HaruMain from "./pages/haru/main";
import HaruPolaKalimat from "./pages/haru/polaKalimat";
import HaruSoal1 from "./pages/haru/soal1";
import Loading from "./pages/loading";
import Main from "./pages/main";
import Menu from "./pages/menu";
import WrongAnswer from "./pages/wrongAnswer";
import CorrectAnswer from "./pages/correctAnswer";
import HaruSoal2 from "./pages/haru/soal2";

const pages = createNativeStackNavigator();

type pagesScreenType = {
  name: string;
  component: () => React.JSX.Element | undefined;
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
  {
    name: "haruSoal1",
    component: HaruSoal1,
  },
  {
    name: "haruSoal2",
    component: HaruSoal2,
  },

  // Correct and Wrong Answer
  {
    name: "correct",
    component: CorrectAnswer,
  },
  {
    name: "wrong",
    component: WrongAnswer,
  },
];

export default function Index() {
  return (
    <pages.Navigator initialRouteName="haruMain">
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
