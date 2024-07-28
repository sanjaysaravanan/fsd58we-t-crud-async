import axios from "axios";

const API_URL = "https://6624eb0804457d4aaf9d50b2.mockapi.io";

const instance = axios.create({
  baseURL: API_URL, // products/payments/carts
  timeout: 5000,
  headers: {
    batch: "FSD58-WE-TAMIL",
  },
});

// incase we have multiple services
const instancePayment = axios.create({
  baseURL: "https://api.payments.com",
  timeout: 5000,
  headers: {
    security: "hi hello",
  },
});

// Read all the Products
export const readProductsAPI = async () => {
  try {
    // without instance
    // const response = await axios.get(`${API_URL}/products`);

    // with instance
    const response = await instance.get("/products");

    console.log(response);

    if (response.status !== 200) {
      throw new Error("Something went wrong");
    }

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Create a product - POST
export const createProductAPI = async (pdData) => {
  const response = await instance.post(`/products`, pdData);
  return response.data;
};
