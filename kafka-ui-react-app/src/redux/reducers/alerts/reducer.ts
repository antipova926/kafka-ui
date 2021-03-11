import { Action, AlertsState, Alert } from 'redux/interfaces';

export const initialState: AlertsState = [];

const addError = (state: AlertsState, action: Action) => {
  if ('payload' in action && 'error' in action.payload) {
    const { subjectId, title, message, error } = action.payload;
    return [
      ...state,
      {
        id: `${action.type}-${subjectId}`,
        type: 'error',
        title,
        message: message || error.message || error,
      } as Alert,
    ];
  }

  return [...state];
};

const reducer = (state = initialState, action: Action): AlertsState => {
  const { type } = action;
  const matches = /(.*)__(FAILURE)$/.exec(type);

  // Temporary ignor non *__FAILURE actions
  if (!matches) return state;

  const [, requestName, requestState] = matches;

  switch (requestState) {
    case 'FAILURE':
      return addError(state, action);
    default:
      return state;
  }
};

export default reducer;
