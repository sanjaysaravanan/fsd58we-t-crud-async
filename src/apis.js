// all the API calls will be here

const API_URL = "https://6624eb0804457d4aaf9d50b2.mockapi.io";

// Products
// Create a product - POST
export const createProductAPI = async (pdData) => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(pdData),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return await response.json();
};

// Read all the Products
export const readProductsAPI = async () => {
  const response = await fetch(`${API_URL}/products`);
  return await response.json();
};

// Delete a specific Product
export const deleteProductAPI = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};
