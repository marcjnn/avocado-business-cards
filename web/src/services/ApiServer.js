const ENDPOINT = "https://avocado-business-cards.herokuapp.com/card";

// const fetchCard = (userData) => {
//   return fetch(ENDPOINT, {
//     method: "POST",
//     body: JSON.stringify(userData),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((response) => response.json());
// };

const fetchCard = async () => {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data;
};

export default { fetchCard };
