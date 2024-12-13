const API_BASE_URL = import.meta.env.VITE_API_URI;

export const fetchData = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    const data = await response.json();
    console.log(data);

    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
};
