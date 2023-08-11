const API_HOST =
  process.env.API_HOST || process.env.API_DEV_HOST || "http://localhost:3000";

const WS_API_HOST =
  process.env.WS_API_HOST ||
  process.env.WS_API_DEV_HOST ||
  "ws://localhost:3000";

export { API_HOST, WS_API_HOST };
