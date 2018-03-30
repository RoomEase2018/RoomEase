import axios from "axios";

// fetch expenses
export const fetchAllActiveUserExpenses = user_id => {
  return axios.get(`/getRoutes/getActiveExpensesByUser/${user_id}`);
};

export const fetchAllUserActiveRecurringExpenses = user_id => {
  return axios.get(`/getRoutes/getActiveRecurringExpensesByUser/${user_id}`);
};

// fetch tasks
export const fetchAllActiveApartmentTasks = apt_id => {
  return axios.get(`/getRoutes/getActiveTasks/${apt_id}`);
};

export const fetchAllApartmentActiveRecurringTasks = apt_id => {
  return axios.get(`/getRoutes/getActiveRecurringTasks/${apt_id}`);
};

// fetch goals
export const fetchAllApartmentActiveGoals = apt_id => {
  return axios.get(`/getRoutes/getActiveApartmentGoals/${apt_id}`);
};

export const fetchAllApartmentActiveRecurringGoals = apt_id => {
  return axios.get(`/getRoutes/goals/recurring/${apt_id}`);
};

// fetch notes
export const fetchAllApartmentVisibleNotes = apt_id => {
  return axios.get(`/getRoutes/getVisibleBulletinNotes/${apt_id}`);
};

// fetch apartment info
export const fetchApartmentInfo = id => {
  return axios.get(`/getRoutes/getApartmentInfo/${id}`);
};

// fetch users
export const fetchUserInfo = username => {
  return axios.get(`/getRoutes/getUserInfo/${username}`);
};

// export const fetchUpdateRecurringActiveTasks

// export const createUser = () => {
//   return axios.post(`/users/new`, {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     username: req.body.username,
//     password: req.body.password,
//     gender: req.body.gender,
//     email: req.body.email,
//     phone: req.body.phone
//   });
// };

// export const loginUser = () => {
//   return axios.post(`/users/login`, {
//     username,
//     password
//   });
// };

// export const logoutUser = () => {
//   return axios.get(`/users/logout`);
// };