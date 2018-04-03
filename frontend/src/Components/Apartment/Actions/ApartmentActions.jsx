import * as api from "../../../API/roomeaseAPI";

export const SET_APARTMENT_INFO = "SET_APARTMENT_INFO"

// action creators
export const setApartmentInfo = info => {
  return {
    type: SET_APARTMENT_INFO,
    info
  };
};

// thunk functions
export const fetchAllApartmentInfo = aptid => dispatch => {
  return api.fetchApartmentInfo(aptid).then(info => {
    dispatch(setApartmentInfo(info.data.data));
  });
};