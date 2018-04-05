import axios from "axios";

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

// register user
export const createUser = (first_name, last_name, username, password, gender, email, phone) => {
  return axios.post(`/user/createUser`, {
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password,
      gender: gender,
      email: email,
      phone: phone
  });
};

// login user
export const loginUser = (username, password) => {
  return axios.post(`/user/login`, {
      username: username,
      password: password
  });
};

// logout user
export const logoutUser = () => {
  return axios.get(`/user/logout`);
};

// create new apartment
export const addNewApartment = (apt_name, apt_pic) => {
  return axios.post(`/insertRoutes/insertNewApartment`, {
      apt_name: apt_name,
      apt_pic: apt_pic
  });
};

// add user into apartment
export const addUserToApartment = (user_id, apt_id) => {
  return axios.post(`/insertRoutes/insertUserIntoApartment`, {
      user_id: user_id,
      apt_id: apt_id
  });
};

// add task
export const addTask = (apt_id, title, from_user_id, to_user_id, due_date, message, karma, cost) => {
  return axios.post(`/insertRoutes/insertTask`, {
      apt_id: apt_id,
      title: title,
      from_user_id: from_user_id,
      to_user_id: to_user_id,
      due_date: due_date,
      message: message,
      karma: karma,
      cost: cost
  });
};

// mark task as completed
export const markTaskCompleted = (task_id, apt_id, to_user_id, karma) => {
  return axios.post(`/insertRoutes/insertTask`, {
      task_id: task_id,
      apt_id: apt_id,
      to_user_id: to_user_id,
      karma: karma
  });
};

// add recurring task
export const addRecurringTask = (apt_id, title, from_user_id, to_user_id, due_date_type, due_date, message, karma) => {
  return axios.post(`/insertRoutes/insertRecurringTask`, {
      apt_id: apt_id,
      title: title,
      from_user_id: from_user_id,
      to_user_id: to_user_id,
      due_date_type: due_date_type,
      due_date: due_date,
      message: message,
      karma: karma
  });
};

// mark recurring task as completed
export const markRecurringTaskCompleted = (task_id, apt_id, to_user_id, karma) => {
  return axios.post(`/insertRoutes/insertRecurringTaskCompleted`, {
    task_id: task_id,
    apt_id: apt_id,
    to_user_id: to_user_id,
    karma: karma,
  });
};

// update recurring task
export const updateActiveRecurringTask = (is_recurring, task_id) => {
  return axios.post(`/insertRoutes/updateRecurringTaskActive`, {
    is_recurring: is_recurring,
    task_id: task_id
  });
};

// add bulletin note
export const addBulletinNote = (apt_id, posted_by, note) => {
  return axios.post(`/insertRoutes/insertBulletinNote`, {
    apt_id: apt_id,
    posted_by: posted_by,
    note: note
  });
};

// add goal
export const addGoal = (apt_id, posted_by, title, note, karma_cost, is_recurring) => {
  return axios.post(`/insertRoutes/insertGoal`, {
    apt_id: apt_id,
    posted_by: posted_by,
    title: title,
    note: note,
    karma_cost: karma_cost,
    is_recurring: is_recurring
  });
};

// mark goal as recurring
export const markGoalRecurring = (is_recurring, goal_id) => {
  return axios.post(`/insertRoutes/updateGoalIsRecurring`, {
    is_recurring: is_recurring,
    goal_id: goal_id
  });
};

// redeem goal
export const redeemGoal = (apt_id, goal_id, redeemed_by_id, karma) => {
  return axios.post(`/insertRoutes/insertGoalRedeemed`, {
    apt_id: apt_id,
    goal_id: goal_id,
    redeemed_by_id: redeemed_by_id,
    karma: karma
  });
}; 
