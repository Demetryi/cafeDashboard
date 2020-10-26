import React, {useContext, useReducer} from 'react';
import {IAppContext, IReducerAction, IAppContextProvider, IUser} from './types';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import * as colors from '@material-ui/core/colors';
import {logout} from '_hooks/useUser';
import {useRouter} from 'next/router';

const initialContext = {
  visible: false,
  prefersDarkMode: true,
  user: null,
};

const AppContext = React.createContext<IAppContext>(initialContext);

export const useAppContext = (): IAppContext => {
  return useContext<IAppContext>(AppContext);
};

const SHOW_DRAWER = 'showDrawer';
const HIDE_DRAWER = 'hideDrawer';
const TOGGLE_THEME = 'toggleTheme';
const SET_USER = 'setUser';
const DARK = 'dark';
const LIGHT = 'light';

const reducer = (state: IAppContext, action: IReducerAction): IAppContext => {
  switch (action.type) {
    case SHOW_DRAWER:
      return {...state, visible: true};
    case HIDE_DRAWER:
      return {...state, visible: false};
    case SET_USER:
      return {...state, user: action.value};
    case TOGGLE_THEME:
      return {...state, prefersDarkMode: !state.prefersDarkMode};
  }
};

export const AppContextProvider = ({
  children,
}: IAppContextProvider): React.ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialContext);
  const router = useRouter();
  const showDrawer = () => dispatch({type: SHOW_DRAWER});
  const hideDrawer = () => dispatch({type: HIDE_DRAWER});
  const toggleTheme = () => dispatch({type: TOGGLE_THEME});
  const setUser = (user: IUser) => dispatch({type: SET_USER, value: user});
  const clearUser = () => {
    logout();
    dispatch({type: SET_USER, value: null});
    router.push('/auth');
  };

  const theme = createMuiTheme({
    palette: {
      type: state.prefersDarkMode ? DARK : LIGHT,
      background: {
        paper: state.prefersDarkMode ? colors.grey['900'] : colors.grey['A100'],
        default: state.prefersDarkMode
          ? colors.grey['800']
          : colors.grey['A200'],
      },
    },
  });

  return (
    <AppContext.Provider
      value={{
        visible: state.visible,
        prefersDarkMode: state.prefersDarkMode,
        user: state.user,
        showDrawer,
        hideDrawer,
        toggleTheme,
        setUser,
        clearUser,
      }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};
