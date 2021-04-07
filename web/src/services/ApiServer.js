const ENDPOINT = "https://avocado-business-cards.herokuapp.com/card";

const fetchCard = (userData) => {
  return fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export default { fetchCard };
