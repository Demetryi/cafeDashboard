import React, {useContext, useReducer} from 'react';
import {IAppContext, IReducerAction, IAppContextProvider} from './types';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const AppContext = React.createContext<IAppContext>({
  visible: false,
});

export const useAppContext = (): IAppContext => {
  return useContext<IAppContext>(AppContext);
};

const SHOW_DRAWER = 'show';
const HIDE_DRAWER = 'hide';
const TOGGLE_DRAWER = 'toggle';

const reducer = (state: IAppContext, action: IReducerAction): IAppContext => {
  switch (action.type) {
    case SHOW_DRAWER:
      return {...state, visible: true};
    case HIDE_DRAWER:
      return {...state, visible: false};
    case TOGGLE_DRAWER:
      return {...state, visible: !state.visible};
    default:
      return state;
  }
};

export const AppContextProvider = ({
  children,
}: IAppContextProvider): React.ReactElement => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
  });
  const show = () => dispatch({type: SHOW_DRAWER});
  const hide = () => dispatch({type: HIDE_DRAWER});
  const toggle = () => dispatch({type: TOGGLE_DRAWER});

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <AppContext.Provider
      value={{
        visible: state.visible,
        show,
        hide,
        toggle,
      }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};