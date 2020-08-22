export interface IAppContext {
  visible: boolean;
  show?: () => void;
  hide?: () => void;
  toggle?: () => void;
}

export interface IReducerShow {
  type: 'show';
}

export interface IReducerHide {
  type: 'hide';
}

export interface IReducerToggle {
  type: 'toggle';
}

export type IReducerAction = IReducerShow | IReducerHide | IReducerToggle;

export interface IAppContextProvider {
  children: React.ReactNode;
}
