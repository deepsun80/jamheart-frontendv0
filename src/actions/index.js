import { setLinkValue } from './setLinkValueAction';

export const setLinkValueAsync = (linkValue) => (dispatch) => {
  dispatch(setLinkValue(linkValue))
}

