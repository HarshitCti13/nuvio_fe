// src/hooks/useAppNavigate.js
import { useNavigate } from "react-router-dom";

const useAppNavigate = () => {
  const navigate = useNavigate();

  const goTo = (eOrPath, maybePath, options = {}) => {
  let path = maybePath;
  let e = eOrPath;

  if (typeof eOrPath === "string") {
    path = eOrPath;
    e = null;
  }

  if (e && e.preventDefault) e.preventDefault();
  navigate(path, options);
};

  const goBack = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    navigate(-1);
  };

  const replace = (e, path) => {
    if (e && e.preventDefault) e.preventDefault();
    navigate(path, { replace: true });
  };

  return { goTo, goBack, replace };
};

export default useAppNavigate;
