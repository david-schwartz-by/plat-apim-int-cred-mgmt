import React from "react";
import {
  LuiBackground,
  DarkTheme,
  LightTheme,
} from "@jda/lui-common-component-library";
import { MuiThemeProvider, Theme } from "@material-ui/core";

import CardGrid from "./components/CardGrid";
import HeaderBlock from "./components/HeaderBlock";

let cards: AppData[] = [
  {
    title: "Vision",
    date: "July 6th 1000",
    description: "",
    id: "dkfjlasdkfjaskldfkjl",
    iconUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    title: "Vision",
    date: "July 6th 1000",
    description: "",
    id: "dkfjlasdkfjaskldfkjl",
    iconUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    title: "Vision",
    date: "July 6th 1000",
    description: "",
    id: "dkfjlasdkfjaskldfkjl",
    iconUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    title: "Vision",
    date: "July 6th 1000",
    description: "",
    id: "dkfjlasdkfjaskldfkjl",
    iconUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    title: "Vision",
    date: "July 6th 1000",
    description: "",
    id: "dkfjlasdkfjaskldfkjl",
    iconUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    title: "Vision",
    date: "July 6th 1000",
    description: "",
    id: "dkfjlasdkfjaskldfkjl",
    iconUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
];

export type AppData = {
  title: string;
  date: string;
  description: string;
  id: string;
  iconUrl: string;
};

export type SubmitFunction = (
  title: string,
  date: string,
  description: string,
  icon: string
) => void;

export enum DisplayTypes {
  CardGrid,
  List,
}

const defaultState: AppState = {
  displayType: DisplayTypes.CardGrid,
  theme: DarkTheme,
};

type AppProps = {};
type AppState = {
  displayType: DisplayTypes;
  theme: Theme;
};

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = defaultState;
  }

  private addApp = (
    title: string,
    date: string,
    description: string,
    icon: string
  ) => {
    let newApp: AppData = {
      title,
      date,
      description,
      id: "1234",
      iconUrl: icon,
    };
    console.log(newApp);
    cards.push(newApp);
  };

  public render() {
    return (
      <MuiThemeProvider theme={this.state.theme}>
        <LuiBackground>
          <HeaderBlock submit={this.addApp} />
          <CardGrid cards={cards} />
        </LuiBackground>
      </MuiThemeProvider>
    );
  }
}
