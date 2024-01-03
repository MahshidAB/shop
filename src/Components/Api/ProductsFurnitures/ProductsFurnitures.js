import axios from "axios";

const instance = axios.create ({
    // baseURL: "http://localhost:3004/Products_Furniture"
    // baseURL: "https://github.com/MahshidAB/dataBase.git/Products_Furniture"
    baseURL: "https://my-json-server.typicode.com/MahshidAB/main-database-part-three/Products_Furniture"
})

export const getAllProductsFurnitures = async () => {
    try {
        const res = await instance.get()
        return res.data
    } catch (error) {
        console.log(error.message);
    }
}

export const getProductFurniture = async (id) => {
    try {
      const res = await instance.get(`${id}`);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };