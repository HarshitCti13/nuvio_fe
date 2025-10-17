// Set token
export const setToken = (panel, token) => {
  const key = `${panel}_token_nuvio`;
  if (key) localStorage.setItem(key, token);
};

// Get token
export const getToken = (panel) => {
  const key = `${panel}_token_nuvio`;
  return key ? localStorage.getItem(key) : null;
};

const STORAGE_KEY = "coachSignupFormData";

export const getFormData = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved
    ? JSON.parse(saved)
    : {
      step1: { full_name: "", email: "", phone_number: "" },
      step2: { category_id: "", year_of_experience: "", format: "" },
      step3: { bio: "", reason: "", profile_image: null, cv: null, certificate: null },
    };
};

export const updateFormData = (stepKey, values) => {
  const existing = getFormData();
  const updated = { ...existing, [stepKey]: values };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const clearFormData = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const setProfile = (panel, token) => {
  const key = `${panel}_profile_nuvio`;
  if (key) localStorage.setItem(JSON.stringify(key), token);
};