import axios from "axios";

const instance = axios.create ({
    // baseURL: "http://localhost:3004/Products_SuperMarket"
    // baseURL: "https://github.com/MahshidAB/dataBase.git/Products_SuperMarket"
    baseURL: "https://my-json-server.typicode.com/MahshidAB/main-database-part-four/Products_SuperMarket"
})

export const getAllProductsSuperMarkets = async () => {
    try {
        const res = await instance.get()
        return res.data
    } catch (error) {
        console.log(error.message);
    }
}

export const getProductSuperMarket = async (id) => {
    try {
      const res = await instance.get(`${id}`);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };




