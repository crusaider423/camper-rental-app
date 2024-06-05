import axios from "axios";

const instance = axios.create({
  baseURL: "https://65c3db0e4ac991e8059b284b.mockapi.io/api/adverts",
});

export const fetchAdverts = async (page = 1, limit = 4) => {
  const { data } = await instance.get(`?page=${page}&limit=${limit}`);
  return data;
};

