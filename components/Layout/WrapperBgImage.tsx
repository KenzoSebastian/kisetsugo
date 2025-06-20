import React from "react";
import { ImageBackground, ImageSourcePropType, StyleSheet } from "react-native";

type WrapperBgImageProps = {
  children: React.ReactNode;
  src: ImageSourcePropType | undefined;
};

export const WrapperBgImage = ({ children, src }: WrapperBgImageProps) => {
  return (
    <ImageBackground style={styles.imageBg} source={src}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
