function rgba(arg0: number, arg1: number, arg2: number, arg3: number) {
  return `rgba(${arg0}, ${arg1}, ${arg2}, ${arg3})`;
}

const defaultTheme = {
  backgroundTheme: rgba(255, 255, 255, 0.7),
};

export const THEMES = {
  default: defaultTheme,
};
