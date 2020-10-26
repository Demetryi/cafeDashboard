export interface IAppContext {
  visible: boolean;
  prefersDarkMode: boolean;
  showDrawer?: () => void;
  user: IUser | null;
  hideDrawer?: () => void;
  toggleTheme?: () => void;
  setUser?: (user: IUser) => void;
  clearUser?: () => void;
}

export interface IUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

export interface IReducerShowDrawer {
  type: 'showDrawer';
}

export interface IReducerHideDrawer {
  type: 'hideDrawer';
}

export interface IReducerSetUser {
  type: 'setUser';
  value: IUser | null;
}

export interface IReducerToggleTheme {
  type: 'toggleTheme';
}

export type IReducerAction =
  | IReducerShowDrawer
  | IReducerHideDrawer
  | IReducerToggleTheme
  | IReducerSetUser;

export interface IAppContextProvider {
  children: React.ReactNode;
}
