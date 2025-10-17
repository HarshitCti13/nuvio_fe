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
// Common full name Validation Rule
const fullNameValidation = Yup.string().required("Please enter full name").trim()
// Common Phone Number Validation Rule
const PhoneValidation = Yup.string()
  .required("Please enter phone number")
  .test("is-valid-phone", "Please enter valid phone number", (value) =>
    isValidPhoneNumber(value || "")
  )

// Common Password Validation Rule
const passwordValidation = Yup.string()
  .required("Please enter password")
  .min(8, "Password cannot be less than 8 characters")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
    "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
  );


export const registerSchema = Yup.object().shape({
  email: emailValidation,
  first_name: Yup.string().required("Please enter first name").trim(),
  last_name: Yup.string().required("Please enter last name").trim(),
  linkedin_url: Yup.string().required("Please enter linkedin profile").trim(),
  phone_number: PhoneValidation,
  role: Yup.string().required("Please select current role"),
  source: Yup.string().required("Please select one"),
});

export const contactUsSchema = Yup.object().shape({
  email: emailValidation,
  full_name: fullNameValidation,
  phone_number: PhoneValidation,
  address: Yup.string().required("Please enter address").trim(),
  subject: Yup.string().required("Please select what this inquiry is about"),
  message: Yup.string().required("Please enter message").trim(),
});

export const signInSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});

export const forgotPasswordSchema = Yup.object().shape({
  email: emailValidation,
});

export const resetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required("Please enter password")
    .min(8, "Password cannot be less than 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
      "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
    ),
  confirm_password: Yup.string()
    .required("Please enter confirm password")
    .oneOf([Yup.ref("newPassword"), null], "Your password must match"),
});

export const step1Schema = Yup.object().shape({
  email: emailValidation,
  full_name: fullNameValidation,
  phone_number: PhoneValidation,
});

export const step2Schema = Yup.object().shape({
  category_id: Yup.string().required("Please select a coaching category"),
  format: Yup.string().required("Please select a coaching format"),
  year_of_experience: Yup.number()
    .typeError("Please enter a valid number")
    .required("Please enter your years of experience")
    .min(0, "Experience cannot be negative")
    .max(100, "Please enter a realistic experience (max 100 years)"),
});
export const step3Schema = Yup.object().shape({
  bio: Yup.string().required("Please enter bio").trim(),
  reason: Yup.string().required("Please enter reason").trim(),
  // tagline: Yup.string()
  //   .required("Please enter a tagline")
  //   .trim()
  //   .test(
  //     "min-words",
  //     "Tagline must be at least 50 words",
  //     (value) => {
  //       if (!value) return false; // required will handle empty
  //       const wordCount = value.trim().split(/\s+/).length; // count words
  //       return wordCount >= 50;
  //     }
  //   ),
  tagline: Yup.string()
    .required("Please enter a tagline")
    .trim()
    .test(
      "min-words",
      "Tagline must be at least 50 words",
      (value) => {
        if (!value) return false; // Required handles empty string
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount >= 50;
      }
    ),
  profile_image: Yup.mixed()
    .test("fileType", "Please upload a valid image", (value) => {
      if (!value || typeof value === "string") return true;
      const validFileTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
      ];
      return validFileTypes.includes(value.type);
    }),
  cv: Yup.mixed()
    .required("Please upload your CV (PDF)")
    .test(
      "fileType",
      "Only PDF files are allowed",
      (value) => {
        if (!value) return false;
        return value && value.type === "application/pdf";
      }
    )
    .test(
      "fileSize",
      "File size must be less than 2 MB",
      (value) => {
        if (!value) return false;
        return value.size <= 2 * 1024 * 1024; // 2MB
      }
    ),
  cv: Yup.mixed()
    .required("Please upload your cv")
    .test(
      "fileType",
      "Only JPG, JPEG, PNG files are allowed",
      (value) => {
        if (!value) return false;
        return ["image/jpg", "image/jpeg", "image/png"].includes(value.type);
      }
    )
    .test(
      "fileSize",
      "File size must be less than 2MB",
      (value) => {
        if (!value) return false;
        return value.size <= 2 * 1024 * 1024;
      }
    ),
  certificate: Yup.mixed()
    .required("Please upload your certificate")
    .test(
      "fileType",
      "Only JPG, JPEG, PNG files are allowed",
      (value) => {
        if (!value) return false;
        return ["image/jpg", "image/jpeg", "image/png"].includes(value.type);
      }
    )
    .test(
      "fileSize",
      "File size must be less than 2MB",
      (value) => {
        if (!value) return false;
        return value.size <= 2 * 1024 * 1024;
      }
    ),
});

export const becomeCoachSchema = Yup.object().shape({
  email: emailValidation,
  full_name: fullNameValidation,
  phone_number: PhoneValidation,
  category_id: Yup.string().required("Please select a coaching category"),
  format: Yup.string().required("Please select a coaching format"),
  year_of_experience: Yup.number()
    .typeError("Please enter a valid number")
    .required("Please enter your years of experience")
    .min(0, "Experience cannot be negative")
    .max(100, "Please enter a realistic experience (max 100 years)"),
  bio: Yup.string().required("Please enter bio").trim(),
  reason: Yup.string().required("Please enter reason").trim(),
  tagline: Yup.string()
    .required("Please enter a tagline")
    .trim()
    .test(
      "min-words",
      "Tagline must be at least 50 words",
      (value) => {
        if (!value) return false; // required will handle empty
        const wordCount = value.trim().split(/\s+/).length; // count words
        return wordCount >= 50;
      }
    ),
  profile_image: Yup.mixed()
    .required("Please upload your profile photo")
    .test(
      "fileType",
      "Only JPG, JPEG, PNG files are allowed",
      (value) => {
        if (!value) return false;
        return ["image/jpg", "image/jpeg", "image/png"].includes(value.type);
      }
    )
    .test(
      "fileSize",
      "File size must be less than 2MB",
      (value) => {
        if (!value) return false;
        return value.size <= 2 * 1024 * 1024;
      }
    ),
  cv: Yup.mixed()
    .required("Please upload your cv")
    .test(
      "fileType",
      "Only JPG, JPEG, PNG files are allowed",
      (value) => {
        if (!value) return false;
        return ["image/jpg", "image/jpeg", "image/png"].includes(value.type);
      }
    )
    .test(
      "fileSize",
      "File size must be less than 2MB",
      (value) => {
        if (!value) return false;
        return value.size <= 2 * 1024 * 1024;
      }
    ),
  certificate: Yup.mixed()
    .required("Please upload your certificate")
    .test(
      "fileType",
      "Only JPG, JPEG, PNG files are allowed",
      (value) => {
        if (!value) return false;
        return ["image/jpg", "image/jpeg", "image/png"].includes(value.type);
      }
    )
    .test(
      "fileSize",
      "File size must be less than 2MB",
      (value) => {
        if (!value) return false;
        return value.size <= 2 * 1024 * 1024;
      }
    ),
});