import { SET_LINK_VALUE } from './type';

export const setLinkValue = (linkValue) => {
    return {
        type: SET_LINK_VALUE,
        linkValue,
    };
};
