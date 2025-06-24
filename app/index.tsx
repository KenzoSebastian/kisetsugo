import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AkiFunFact from "./pages/aki/funFact";
import AkiKatoba from "./pages/aki/katoba";
import AkiMain from "./pages/aki/main";
import AkiPolaKalimat from "./pages/aki/polaKalimat";
import AkiSoal1 from "./pages/aki/soal1";
import AkiSoal2 from "./pages/aki/soal2";
import AkiSoal3 from "./pages/aki/soal3";
import AkiSoal4 from "./pages/aki/soal4";
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
import AkiLatihan from "./pages/aki/latihan";
import FuyuFunFact from "./pages/fuyu/funFact";
import FuyuKatoba from "./pages/fuyu/katoba";
import FuyuLatihan from "./pages/fuyu/latihan";
import FuyuMain from "./pages/fuyu/main";
import FuyuPolaKalimat from "./pages/fuyu/polaKalimat";
import FuyuSoal1 from "./pages/fuyu/soal1";
import FuyuSoal2 from "./pages/fuyu/soal2";
import FuyuSoal3 from "./pages/fuyu/soal3";
import FuyuSoal4 from "./pages/fuyu/soal4";
import WrongAnswer from "./pages/wrongAnswer";
import MusicPlayer from "@/components/MusicPlayer";

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

  // Natsu pages
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

  // Aki pages
  {
    name: "akiMain",
    component: AkiMain,
  },
  {
    name: "akiFunFact",
    component: AkiFunFact,
  },
  {
    name: "akiKatoba",
    component: AkiKatoba,
  },
  {
    name: "akiPolaKalimat",
    component: AkiPolaKalimat,
  },
  {
    name: "akiLatihan",
    component: AkiLatihan,
  },
  {
    name: "akiSoal1",
    component: AkiSoal1,
  },
  {
    name: "akiSoal2",
    component: AkiSoal2,
  },
  {
    name: "akiSoal3",
    component: AkiSoal3,
  },
  {
    name: "akiSoal4",
    component: AkiSoal4,
  },

  // Fuyu pages
  {
    name: "fuyuMain",
    component: FuyuMain,
  },
  {
    name: "fuyuFunFact",
    component: FuyuFunFact,
  },
  {
    name: "fuyuKatoba",
    component: FuyuKatoba,
  },
  {
    name: "fuyuPolaKalimat",
    component: FuyuPolaKalimat,
  },
  {
    name: "fuyuLatihan",
    component: FuyuLatihan,
  },
  {
    name: "fuyuSoal1",
    component: FuyuSoal1,
  },
  {
    name: "fuyuSoal2",
    component: FuyuSoal2,
  },
  {
    name: "fuyuSoal3",
    component: FuyuSoal3,
  },
  {
    name: "fuyuSoal4",
    component: FuyuSoal4,
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
    <>
      <MusicPlayer />
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
    </>
  );
}

type PageName = (typeof pagesScreen)[number]["name"];

export type RootStackParamList = {
  [K in PageName]: undefined | { data: any };
};
