const ENDPOINT = "http://localhost:3000/card";

const fetchCard = async (userData) => {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export default { fetchCard };
