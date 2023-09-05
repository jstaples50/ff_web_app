export const setManagerCredentialsInLocalStorage = (managers) => {
  if (managers) {
    localStorage.setItem("testManagers", JSON.stringify(managers));
  } else {
    localStorage.removeItem("testManagers");
  }
};

export const getManagerCredentialsInLocalStorage = () => {
  const savedManagers = localStorage.getItem("testManagers")
    ? JSON.parse(localStorage.getItem("testManagers"))
    : [];
  return savedManagers;
};

export const setCurrentManagerInLocalStorage = (manager) => {
  if (manager) {
    localStorage.setItem("currentManager", JSON.stringify(manager));
  } else {
    localStorage.removeItem("currentManager");
  }
};

export const getCurrentManagerInLocalStorage = () => {
  const currentManager = localStorage.getItem("currentManager")
    ? JSON.parse(localStorage.getItem("currentManager"))
    : null;
  return currentManager;
};
