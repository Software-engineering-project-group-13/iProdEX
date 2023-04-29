import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Mzg0MGQ2OTc2NTY0YjczNmVkMTQ3ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTQ2Mzc4NCwiZXhwIjoxNjgxNzIyOTg0fQ.xv13cMx0juqon3V1Zu7PDb00l9dt3g2z9GIWiaopKDU";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
