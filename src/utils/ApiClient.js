
export const login = (username, password) => { // eslint-disable-line

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({token: '123', username});
    }, 100);
  });
};

export const forgotPassword = (username) => { // eslint-disable-line

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
