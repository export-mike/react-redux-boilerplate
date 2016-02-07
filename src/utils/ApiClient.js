
export const login = (username, password) => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({token: '123', username});
    }, 100);
  });
};

export const forgotPassword = (username) => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
};

export const logout = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
};
