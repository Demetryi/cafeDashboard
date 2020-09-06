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

const reducer = (state: IAppContext, action: IReducerAction): IAppContext => {
  switch (action.type) {
    case SHOW_DRAWER:
      return {...state, visible: true};
    case HIDE_DRAWER:
      return {...state, visible: false};
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
      }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};
