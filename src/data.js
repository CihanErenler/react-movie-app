const base_url = process.env.REACT_APP_API_BASE_URL;
const api_key = process.env.REACT_APP_API_KEY;

export const getTrends = async () => {
  try {
    const response = await fetch(
      `${base_url}trending/all/day?api_key=${api_key}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
