function rgba(arg0: number, arg1: number, arg2: number, arg3: number) {
  return `rgba(${arg0}, ${arg1}, ${arg2}, ${arg3})`;
}

const defaultTheme = {
  backgroundTheme: rgba(255, 255, 255, 0.7),
};
const pinkTheme = {
  backgroundTheme: rgba(255, 200, 215, 0.7),
};
const yellowTheme = {
  backgroundTheme: rgba(255, 226, 97, 0.7),
};
const brownTheme = {
  backgroundTheme: rgba(154, 123, 79, 0.7),
};
const blueTheme = {
  backgroundTheme: rgba(0, 191, 255, 0.7),
};


export const THEMES = {
  default: defaultTheme,
  pink: pinkTheme,
  yellow: yellowTheme,
  brown: brownTheme,
  blue: blueTheme
};
