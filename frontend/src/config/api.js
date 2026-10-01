const BACKEND_URL = (
  process.env.REACT_APP_BACKEND_URL || "http://localhost:8000"
).replace(/\/+$/, "");

export const API_BASE = `${BACKEND_URL}/api`;

export default API_BASE;