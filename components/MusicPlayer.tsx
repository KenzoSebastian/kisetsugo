import { useAudioPlayer } from "expo-audio";
import { useEffect } from "react";

const MusicPlayer = () => {
  const sound = useAudioPlayer(require("@/assets/music/backsound.mp3"));
  sound.loop = true;
  useEffect(() => {
    sound.play();
  }, [sound]);

  return null;
};

export default MusicPlayer;
