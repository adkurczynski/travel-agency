/* SELECTORS */


export const getAllFilters = ({filters}) => filters;
export const getDuration = ({duration}) => duration;
/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_FROM = createActionName('CHANGE_FROM');
export const CHANGE_TO = createActionName('CHANGE_TO');
export const ADD_TAG = createActionName('ADD_TAG');
export const DEL_TAG = createActionName('DEL_TAG');
// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeFrom = payload => ({ payload, type: CHANGE_FROM});
export const changeTo = payload => ({ payload, type: CHANGE_TO});
export const addTag = payload => ({ payload, type: ADD_TAG});
export const delTag = payload => ({ payload, type: DEL_TAG});
// reducer
export default function reducer(  statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
      // TODO - handle other action types
    case CHANGE_FROM:
      return {
        ...statePart,
        duration: {
          from: action.payload,
          to: statePart.duration.to,
        },
      };
    case CHANGE_TO:
      return {
        ...statePart,
        duration: {
          from: statePart.duration.from,
          to: action.payload,
        },
      };
    case ADD_TAG:

      return {
        ...statePart,
        tags: action.payload +' '+ statePart.tags,
      };
    case DEL_TAG:
      return {
        ...statePart,
        tags: statePart.tags.replace(action.payload,''),
      };
    default:
      return statePart;
  }
}
