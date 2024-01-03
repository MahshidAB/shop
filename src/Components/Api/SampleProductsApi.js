import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3004/sampleProducts",
  // baseURL: "https://github.com/MahshidAB/dataBase.git/sampleProducts"
  baseURL: "https://my-json-server.typicode.com/MahshidAB/main-database-part-one/sampleProducts"
  
});

export const getAllSampleProducts = async () => {
  try {
    const res = await instance.get();
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getSampleProduct = async (id) => {
  try {
    const res = await instance.get(`${id}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};


