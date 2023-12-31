import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3004/sliderImages",
});

export const getSlider = async () => {
  try {
    const res = await instance.get();
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
