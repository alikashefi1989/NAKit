import React, { useMemo } from "react";
import type { Preview, Decorator } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "./GlobalStyles";
import useStore from "../src/state-management/store";
import StoreModel from "../src/models/store-model";
import AppThemeModel from "../src/models/theme-model";
import appTheme from "../src/configs/theme";

const withZustandTheme: Decorator = (Story, context) => {
  const ThemeWrapper = () => {
    const darkMode: boolean = useStore<boolean>(
      (store: StoreModel) => store.darkMode
    );
    const theme: AppThemeModel = useMemo<AppThemeModel>(
      () => appTheme(darkMode),
      [darkMode]
    );
    const setDarkMode = useStore((store: StoreModel) => store.setDarkMode);

    setDarkMode(context.globals.darkMode);

    return (
      <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Story {...context} />
        </ThemeProvider>
      </>
    );
  };

  return <ThemeWrapper />;
};

const preview: Preview = {
  globalTypes: {
    darkMode: {
      name: "Dark Mode",
      description: "Toggle dark/light theme",
      defaultValue: false,
      toolbar: {
        items: [
          { value: false, title: "Light", icon: "sun" },
          { value: true, title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withZustandTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
};

export default preview;
