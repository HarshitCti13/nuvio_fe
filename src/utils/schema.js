import * as Yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";

// Common Email Validation Rule
const emailValidation = Yup.string()
  .trim()
  .email("Please enter a valid email")
  .required("Please enter email")
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
    "Please enter a valid email"
  );

export const registerSchema = Yup.object().shape({
  email: emailValidation,
  first_name: Yup.string().required("Please enter first name").trim(),
  last_name: Yup.string().required("Please enter last name").trim(),
  linkedin_url: Yup.string().required("Please enter linkedin profile").trim(),
  phone_number: Yup.string()
    .required("Please enter phone number")
    .test("is-valid-phone", "Please enter valid phone number", (value) =>
      isValidPhoneNumber(value || "")
    ),

  role: Yup.string().required("Please select current role"),
  source: Yup.string().required("Please select one"),
});

export const contactUsSchema = Yup.object().shape({
  email: emailValidation,
  full_name: Yup.string().required("Please enter full name").trim(),
  phone_number: Yup.string()
    .required("Please enter phone number")
    .test("is-valid-phone", "Please enter valid phone number", (value) =>
      isValidPhoneNumber(value || "")
    ),
  address: Yup.string().required("Please enter address").trim(),
  subject: Yup.string().required("Please select what this inquiry is about"),
  message: Yup.string().required("Please enter message").trim(),
});
