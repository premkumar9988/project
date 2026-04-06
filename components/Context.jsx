'use client';

import { createContext,useCallback,useContext,useReducer,} from 'react';

const DEFAULT_TITLE = 'Global Title Manager';

export const ACTIONS = {
  UPDATE_TITLE: 'UPDATE_TITLE',
  RESET: 'RESET',
};

function titleReducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_TITLE:
      return { ...state, title: action.payload };
    case ACTIONS.RESET:
      return { ...state, title: DEFAULT_TITLE };
    default:
      throw new Error(`[TitleContext] Unknown action type: "${action.type}"`);
  }
}


const initialState = {
  title: DEFAULT_TITLE,
};


const TitleStateContext    = createContext(null);
const TitleDispatchContext = createContext(null);

export function TitleProvider({ children }) {
  const [state, dispatch] = useReducer(titleReducer, initialState);

  const updateTitle = useCallback(
    (newTitle) => dispatch({ type: ACTIONS.UPDATE_TITLE, payload: newTitle }),
    [] 
  );

  const resetTitle = useCallback(
    () => dispatch({ type: ACTIONS.RESET }),
    []
  );

  return (
    <TitleStateContext.Provider value={state}>
      <TitleDispatchContext.Provider value={{ updateTitle, resetTitle }}>
        {children}
      </TitleDispatchContext.Provider>
    </TitleStateContext.Provider>
  );
}


export function useTitleState() {
  const context = useContext(TitleStateContext);
  if (context === null) {
    throw new Error('useTitleState must be used inside a <TitleProvider>');
  }
  return context;
}


export function useTitleDispatch() {
  const context = useContext(TitleDispatchContext);
  if (context === null) {
    throw new Error('useTitleDispatch must be used inside a <TitleProvider>');
  }
  return context;
}