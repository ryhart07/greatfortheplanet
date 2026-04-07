const BASE_URL = "http://localhost:3001";

export const createUser = (data) => {
  return fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}