const setToLocalStorage = ({ authToken, authEmail, authUserId }) => {
  localStorage.setItem("authToken", authToken);
  localStorage.setItem("authEmail", authEmail);
  localStorage.setItem("authUserId", authUserId);
};

const getFromLocalStorage = key => {
  return localStorage.getItem(key);
};

export { setToLocalStorage, getFromLocalStorage };
