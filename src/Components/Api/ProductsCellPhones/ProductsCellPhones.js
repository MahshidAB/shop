import axios from "axios";

const instance = axios.create ({
    // baseURL: "http://localhost:3004/Products_CellPhone"
    // baseURL: "https://github.com/MahshidAB/dataBase.git/Products_CellPhone"
    baseURL: "https://my-json-server.typicode.com/MahshidAB/main-database-part-two/Products_CellPhone"
})

export const getAllProductsCellPhones = async () => {
    try {
        const res = await instance.get()
        return res.data
    } catch (error) {
        console.log(error.message);
    }
}

export const getProductCellPhone = async (id) => {
    try {
      const res = await instance.get(`${id}`);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  export const editCellphone = async (id) => {
    try {
      // const res = 
    } catch (error) {
      console.log(error.message);
    }
  }