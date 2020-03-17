// selectors
export const getOrder = ({order}) => order;
export const getOrderOptions = ({order}) => order.options;

// action name creator
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_OPTION = createActionName('SET_OPTION');
export const ADD_CHECKBOX = createActionName('ADD_CHECKBOX');

// action creators
export const setOrderOption = payload => ({ payload, type: SET_OPTION });
export const addAllCkeckboxes = payload =>({payload, type: ADD_CHECKBOX});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_OPTION:
      return {
        ...statePart,
        options: {
          ...statePart.options,
          ...action.payload,
        },
      };
    case ADD_CHECKBOX:
      if(!statePart.options.features.includes(action.payload.features)){
        console.log('nie zawiera');
        return{
          ...statePart,
          options: {
            ...statePart.options,
            features: statePart.options.features.concat(action.payload.features),
          },
        };
      } else{
        console.log('zawiera', action.payload.features, statePart.options.features);
        statePart.options.features.splice(statePart.options.features.indexOf(action.payload.features),1);
        return{
          ...statePart,
          options: {
            ...statePart.options,
            features: statePart.options.features,
          },
        };
      }
    default:
      return statePart;

  }
}
