// Functions for Setting and Getting Current User Data
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

// Functions for Setting and Getting running team comments
export const getTeamCommentFromLocalStorage = () => {
  const savedComments = localStorage.getItem("teamComments")
    ? JSON.parse(localStorage.getItem("teamComments"))
    : [];
  return savedComments;
};

export const setTeamCommentsToLocalStorage = (comment) => {
  const savedComments = getTeamCommentFromLocalStorage("teamComments");
  if (savedComments.length && comment) {
    localStorage.setItem(
      "teamComments",
      JSON.stringify([...savedComments, comment])
    );
  } else {
    localStorage.setItem("teamComments", JSON.stringify([comment]));
  }
};
