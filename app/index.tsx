import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Closing from "./pages/closing";
import CorrectAnswer from "./pages/correctAnswer";
import HaruFunFact from "./pages/haru/funFact";
import HaruKatoba from "./pages/haru/katoba";
import HaruLatihan from "./pages/haru/latihan";
import HaruMain from "./pages/haru/main";
import HaruPolaKalimat from "./pages/haru/polaKalimat";
import HaruSoal1 from "./pages/haru/soal1";
import HaruSoal2 from "./pages/haru/soal2";
import HaruSoal3 from "./pages/haru/soal3";
import HaruSoal4 from "./pages/haru/soal4";
import Loading from "./pages/loading";
import Main from "./pages/main";
import Menu from "./pages/menu";
import NatsuFunFact from "./pages/natsu/funFact";
import NatsuKatoba from "./pages/natsu/katoba";
import NatsuLatihan from "./pages/natsu/latihan";
import NatsuMain from "./pages/natsu/main";
import NatsuPolaKalimat from "./pages/natsu/polaKalimat";
import NatsuSoal1 from "./pages/natsu/soal1";
import NatsuSoal2 from "./pages/natsu/soal2";
import NatsuSoal3 from "./pages/natsu/soal3";
import NatsuSoal4 from "./pages/natsu/soal4";
import WrongAnswer from "./pages/wrongAnswer";

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
  {
    name: "closing",
    component: Closing,
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
  {
    name: "haruSoal3",
    component: HaruSoal3,
  },
  {
    name: "haruSoal4",
    component: HaruSoal4,
  },
  // natsu pages
  {
    name: "natsuMain",
    component: NatsuMain,
  },
  {
    name: "natsuFunFact",
    component: NatsuFunFact,
  },
  {
    name: "natsuKatoba",
    component: NatsuKatoba,
  },
  {
    name: "natsuPolaKalimat",
    component: NatsuPolaKalimat,
  },
  {
    name: "natsuLatihan",
    component: NatsuLatihan,
  },
  {
    name: "natsuSoal1",
    component: NatsuSoal1,
  },
  {
    name: "natsuSoal2",
    component: NatsuSoal2,
  },
  {
    name: "natsuSoal3",
    component: NatsuSoal3,
  },
  {
    name: "natsuSoal4",
    component: NatsuSoal4,
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
