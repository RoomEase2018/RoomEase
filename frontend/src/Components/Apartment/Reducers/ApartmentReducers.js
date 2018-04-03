import { SET_APARTMENT_INFO } from "../Actions/ApartmentActions";

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_APARTMENT_INFO:
      return {
        apartmentInfo: { ...action.info}
      };

    default:
      return state;
  }
};
