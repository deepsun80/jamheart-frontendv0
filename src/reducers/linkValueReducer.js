import { SET_LINK_VALUE } from '../actions/type';

const INITIAL_STATE = {
  linkValue : 1,
};

const linkValueReducer = (state = INITIAL_STATE, { type, linkValue }) => {
    switch (type) {
        case SET_LINK_VALUE:
            return {
              ...state,
              linkValue,
            };
        default:
            return state;
    }
}

// const linkValue = (state, action) => {
//     switch (action.type) {
//         case SET_LINK_VALUE:
//             return action.payload;
//         default:
//             return linkValue;
//     }
// }

export default linkValueReducer;
