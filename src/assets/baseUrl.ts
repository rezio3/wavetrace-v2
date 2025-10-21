const isLocalhost =
  typeof window !== "undefined" && window.location.hostname === "localhost";

export const baseUrl = isLocalhost
  ? "http://localhost:5000/"
  : "https://wavetrace-backend.onrender.com/";

// vvv connect local with backend on hosting

// export const baseUrl = "https://wavetrace-backend.onrender.com/";
