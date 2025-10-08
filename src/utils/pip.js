// Set token
export const setToken = (panel, token) => {
  const key = `${panel}_token`;
  if (key) localStorage.setItem(key, token);
};

// Get token
export const getToken = (panel) => {
  const key = `${panel}_token`;
  return key ? localStorage.getItem(key) : null;
};