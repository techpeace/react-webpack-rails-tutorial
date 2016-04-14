import commentsReducer from './commentsReducer';
import railsContextReducer from './railsContextReducer';
import { $$initialState as $$commentsState } from './commentsReducer';
import { initialState as railsContextState } from './railsContextReducer';

export default {
  $$commentsStore: commentsReducer,
  railsContext: railsContextReducer,
};

export const initialStates = {
  $$commentsState,
  railsContextState,
};
