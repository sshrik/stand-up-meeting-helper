import { JWT } from "google-auth-library";

const ServiceAccountAuth = new JWT({
  email: import.meta.env.VITE_SERVICE_ACCOUNT_EMAIL,
  key: import.meta.env.VITE_SERVICE_ACCOUNT_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export default ServiceAccountAuth;
