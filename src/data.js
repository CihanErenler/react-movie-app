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

export const getMovie = async (id) => {
  try {
    const response = await fetch(
      `${base_url}movie/${id}?api_key=${api_key}&append_to_response=credits,reviews,recommendations`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getShow = async (id) => {
  try {
    const response = await fetch(
      `${base_url}tv/${id}?api_key=${api_key}&append_to_response=credits,reviews,similar`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getNowPlaying = async () => {
  try {
    const response = await fetch(
      `${base_url}movie/now_playing?api_key=${api_key}&language=en-US&page=1`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
