export const SET_COMPONENT_ACTIVE = "SET_COMPONENT_ACTIVE";
export const CLEAR_ACTIVE = "CLEAR_ACTIVE";

export const setComponentActive = component => ({
  type: SET_COMPONENT_ACTIVE,
  component
})

export const clearActive = () => ({
  type: CLEAR_ACTIVE
})
